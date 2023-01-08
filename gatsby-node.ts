import type { GatsbyNode } from 'gatsby';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import {
  Options, PageACF, ParsedOptions, Translations,
} from './src/types/wordpress';
import { Endpoints } from './src/constants/endpoints';
import {
  Languages, Page, Post, Template,
} from './src/types';
import { RequestParams } from '@/types/global';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const templates: { [key in Template]: string } = {
  about: path.resolve('./src/templates/AboutPage.tsx'),
  contact: path.resolve('./src/templates/ContactPage.tsx'),
  csr: path.resolve('./src/templates/CSRPage.tsx'),
  history: path.resolve('./src/templates/HistoryPage.tsx'),
  home: path.resolve('./src/templates/HomePage.tsx'),
  ips: path.resolve('./src/templates/IPSPage.tsx'),
  managing: path.resolve('./src/templates/ManagingPage.tsx'),
  news: path.resolve('./src/templates/NewsPage.tsx'),
  offer: path.resolve('./src/templates/OfferPage.tsx'),
  offerBrakes: path.resolve('./src/templates/OfferBrakesPage.tsx'),
  page: path.resolve('./src/templates/GenericPage.tsx'),
  quality: path.resolve('./src/templates/QualityPage.tsx'),
  values: path.resolve('./src/templates/ValuesPage.tsx'),
};

const newsSlugs = ['/en/news/', '/aktualnosci/']; // TODO: add other languages when slugs are 100% known

const getUrl = (endpoint: string = '', params?: RequestParams) => {
  const { GATSBY_BACKEND_URL: backendUrl } = process.env;
  const baseUrl = `${backendUrl}/${endpoint}`;

  if (params && Object.keys(params).length > 0) {
    const urlParams = new URLSearchParams(params);

    return `${baseUrl}?${urlParams.toString()}`;
  }

  return baseUrl;
};

const fetchEntities = async (
  entity: Endpoints,
  id?: number,
  params: RequestParams = {},
  infinite: boolean = false
) => {
  const url = id ? `${getUrl(Endpoints.PAGES)}/${id}` : getUrl(entity, params);

  const response = await fetch(url);

  if (infinite) {
    const pageCount = Number(response.headers.get('x-wp-totalpages'));

    const result = await Promise.all([...new Array(pageCount)].map(async (_, index) => {
      const loopUrl = getUrl(entity, {
        page: String(index + 1),
        per_page: '30',
      });
      const loopResponse = await fetch(loopUrl);
      const loopResult = await loopResponse.json();

      return loopResult;
    }));

    return result.flat();
  }

  const result = await response.json();

  return result;
};

const parsePost = (postData: Post) => ({
  content: postData.content,
  extendedInfo: postData.acf,
  id: postData.id,
  language: postData.lang,
  title: postData.title.rendered,
  translations: postData.translations,
});

const parseOptions = (options: Options): ParsedOptions => ({
  address: options.address.address,
  cookiesButtonText: options.cookiesButtonText,
  cookiesText: options.cookiesText,
  footer: {
    background: options.address.background,
    copyright: options.footerText,
    nav: options.footerNav.map(item => ({
      heading: item.heading,
      subitems: item.list.map(subitem => ({
        isBold: subitem.isBold,
        label: subitem.label,
        slug: subitem.page.post_name,
        title: subitem.page.post_title,
      })),
    })),
    verticalBackground: options.address.verticalBackground,
  },
  nav: options.nav.mainMenu.map(item => {
    const common = {
      itemType: item.itemType,
      label: item.label,
    };

    if (item.itemType === 'page') {
      return {
        ...common,
        page: {
          slug: item.page.post_name,
          title: item.page.post_title,
        },
      };
    }

    return {
      ...common,
      submenu: item?.submenu?.map(subitem => ({
        label: subitem.label,
        page: {
          slug: subitem.page.post_name,
          title: subitem.page.post_title,
        },
      })),
    };
  }),
  newsletter: options.newsletter,
  search: options.search,
  socials: options.address.socials,
});

const getPath = ({
  acf: { template: { value: template } }, slug, lang,
}: Page) => {
  const prefix = lang === Languages.polish ? '/' : `/${lang}/`;

  if (template === 'home') {
    return prefix;
  }

  if (lang === Languages.russian) {
    return `/${lang}/${decodeURIComponent(slug)}`;
  }

  return `${prefix}${slug}`;
};

const getPageLangs = async (translations: Translations) => {
  const langs = {} as { [key in keyof Translations]: string };
  const keys = Object.keys(translations);

  await Promise.all(keys.map(async key => {
    const url = getUrl(`${Endpoints.PAGES}${translations[key as keyof Translations]}`);

    const response = await fetch(url);
    const result = await response.json();

    langs[key as keyof Translations] = getPath(result);
  }));

  return langs;
};

const getContext = async ({
  acf, content, id, date, slug, status, title, parent: parentId, meta, lang, translations,
}: Page, posts: Array<Post>, options: Options) => {
  const i18Slugs = await getPageLangs(translations);

  const { template: { value: template } }: PageACF = acf;
  const globalContext = {
    date,
    i18n: {
      slugs: i18Slugs,
    },
    id,
    lang,
    metadata: {
      ...meta,
      lang,
      title,
    },
    options: Object.keys(options).length > 0 ? parseOptions(options) : undefined,
    parentId,
    slug,
    status,
  };

  // TODO: improve acf parsing per page

  if (template === 'home') {
    return {
      ...globalContext,
      content: acf,
      posts: posts.slice(0, acf?.posts?.postCount ?? posts.length),
    };
  }

  if (template === 'contact') {
    return {
      ...globalContext,
      content: acf,
    };
  }

  if (template === 'news') {
    return {
      ...globalContext,
      content: acf,
      header: acf.header,
      posts: posts.map(post => ({
        date: post.date,
        excerpt: post.excerpt.rendered,
        image: post.acf.thumbnail,
        text: post.content.rendered,
        title: post.title.rendered,
      })),
    };
  }

  if (template === 'quality' || template === 'offer' || template === 'offerBrakes') {
    return {
      ...globalContext,
      content: acf,
      header: acf.header,
    };
  }

  return {
    ...globalContext,
    content,
    header: {
      background: acf?.header?.background,
      title,
    },
  };
};

const getTemplate = ({
  acf:
  {
    template:
    { value: pageTemplate },
  },
}: Page) => templates[pageTemplate as keyof typeof templates];

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;
  const pages: Array<Page> = await fetchEntities(Endpoints.PAGES, undefined, { per_page: '30' }, true);
  const posts: Array<Post> = await fetchEntities(Endpoints.POSTS);

  await Promise.all(pages.map(async page => {
    if (page === undefined) return;

    const options: { acf: Options } = await fetchEntities(
      Endpoints.GLOBALS,
      undefined,
      { lang: page.lang }
    );
    const pagePath = getPath(page);
    const context = await getContext(page, posts, options.acf);
    const template = getTemplate(page);

    createPage({
      component: template,
      context: newsSlugs.includes(pagePath)
        ? {
          ...context,
          posts: posts.map(post => parsePost(post)),
        }
        : context,
      path: pagePath,
    });
  }));
};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};
