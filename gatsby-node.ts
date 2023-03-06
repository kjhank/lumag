import type { GatsbyNode } from 'gatsby';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import {
  Options, PageACF, ParsedOptions, Translations,
} from './src/types/wordpress';
import { Endpoints } from './src/static/constants/endpoints';
import {
  ContactForm,
  JobOffer,
  Languages, Page, Post, RawOffer, Template,
} from './src/types';
import { RequestParams } from '@/types/global';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const regularPages = [
  'ips',
  'quality',
  'offerBrakes',
  'csr',
  'history',
  'managing',
  'about',
  'values',
];

const templates: { [key in Template]: string } = {
  about: path.resolve('./src/templates/AboutPage.tsx'),
  careers: path.resolve('./src/templates/CareersPage.tsx'),
  contact: path.resolve('./src/templates/ContactPage.tsx'),
  csr: path.resolve('./src/templates/CSRPage.tsx'),
  history: path.resolve('./src/templates/HistoryPage.tsx'),
  home: path.resolve('./src/templates/HomePage.tsx'),
  ips: path.resolve('./src/templates/IPSPage.tsx'),
  managing: path.resolve('./src/templates/ManagingPage.tsx'),
  news: path.resolve('./src/templates/NewsPage.tsx'),
  notFound: path.resolve('./src/templates/404Page.tsx'),
  offer: path.resolve('./src/templates/OfferPage.tsx'),
  offerBrakes: path.resolve('./src/templates/OfferBrakesPage.tsx'),
  page: path.resolve('./src/templates/GenericPage.tsx'),
  quality: path.resolve('./src/templates/QualityPage.tsx'),
  values: path.resolve('./src/templates/ValuesPage.tsx'),
};

const getUrl = (endpoint: string = '', params?: RequestParams) => {
  const { GATSBY_BACKEND_URL: backendUrl } = process.env;
  const baseUrl = `${backendUrl}/${endpoint}`;

  if (params && Object.keys(params).length > 0) {
    const urlParams = new URLSearchParams(params);

    return `${baseUrl}?${urlParams.toString()}`;
  }

  return baseUrl;
};

const getToken = async () => {
  const url = getUrl(Endpoints.AUTH);
  const body = JSON.stringify({
    password: process.env.GATSBY_API_PASSWORD,
    username: process.env.GATSBY_API_USER,
  });

  const response = await fetch(url, {
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const result = await response.json();

  return result;
};

const fetchEntities = async (
  entity: Endpoints,
  id?: number,
  params: { [key: string]: string } = {},
  infinite: boolean = false,
  shouldAuth?: boolean
) => {
  const url = id ? `${getUrl(entity)}/${id}` : getUrl(entity, params);
  const { token } = await getToken();

  const response = shouldAuth
    ? await fetch(
      url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    : await fetch(url);

  if (infinite) {
    const pageCount = Number(response.headers.get('x-wp-totalpages'));

    const result = await Promise.all([...new Array(pageCount)].map(async (_, index) => {
      const loopUrl = getUrl(entity, {
        page: String(index + 1),
        per_page: '30',
        ...params,
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

const parseOptions = (options: Options): ParsedOptions => ({
  address: options.address.address,
  cookiesButtonText: options.cookiesButtonText,
  cookiesText: options.cookiesText,
  defaultNewsThumbnail: options.defaultNewsThumbnail,
  footer: {
    background: options.address.background,
    copyright: options.footerText,
    nav: options.footerNav.map(item => ({
      heading: item.heading,
      subitems: item.list.map(subitem => ({
        isBold: subitem.isBold,
        label: subitem.label,
        page: subitem.page,
        title: subitem.label || subitem.page.title,
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
  searchMessages: options.searchMessages,
  socials: options.address.socials,
});

const getPath = ({
  acf: { template: { value: template } }, slug, lang,
}: Page) => {
  const prefix = lang === Languages.polish ? '/' : `/${lang}/`;

  if (template === 'home') {
    return prefix;
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

const fetchPosts = async (lang: Languages): Promise<Array<Post>> => {
  const posts = await fetchEntities(
    Endpoints.POSTS,
    undefined,
    { lang },
    true
  );

  return posts;
};

const getContext = async ({
  acf, content, id, date, slug, status, title,
  parent: parentId, meta, lang, translations, yoast_head_json: seo,
}: Page, options: Options) => {
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
      seo,
      title,
    },
    options: Object.keys(options).length > 0 ? parseOptions(options) : undefined,
    parentId,
    slug,
    status,
  };

  // TODO: improve acf parsing per page

  if (template === 'home') {
    const posts = await fetchPosts(lang);

    return {
      ...globalContext,
      content: acf,
      posts: posts.slice(0, acf?.posts?.postCount ?? posts.length - 1),
    };
  }

  if (template === 'contact') {
    return {
      ...globalContext,
      content: acf,
    };
  }

  if (template === 'careers') {
    const rawOffers: Array<RawOffer> = await fetchEntities(Endpoints.CAREERS, undefined, { lang });

    const jobOffers: Array<JobOffer> = rawOffers.map(({ acf: offer }) => ({
      name: offer.name,
      requirements: offer.requirements,
      tasks: offer.tasks,
    }));

    return {
      ...globalContext,
      content: {
        ...acf,
        jobOffers,
      },
    };
  }

  if (template === 'news') {
    const posts = await fetchPosts(lang);

    return {
      ...globalContext,
      content: acf,
      header: acf.header,
      posts: posts.map(post => ({
        date: post.date,
        excerpt: post.excerpt?.rendered,
        image: post.acf?.thumbnail,
        slug: post.slug,
        text: post.content?.rendered,
        title: post.title?.rendered,
      })),
    };
  }

  if (regularPages.includes(template)) {
    return {
      ...globalContext,
      content: acf,
      header: acf.header,
    };
  }

  return {
    ...globalContext,
    content: {
      body: content.rendered,
      seeMore: acf.seeMore,
    },
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
  const pages: Array<Page> = await fetchEntities(
    Endpoints.PAGES,
    undefined,
    { per_page: '30' },
    true
  );
  const contactForms: Array<ContactForm> = await fetchEntities(
    Endpoints.FORMS,
    undefined,
    undefined,
    undefined,
    true
  );

  await Promise.all(pages.map(async page => {
    if (page === undefined) return;

    const options: { acf: Options } = await fetchEntities(
      Endpoints.GLOBALS,
      undefined,
      { lang: page.lang }
    );
    const pagePath = getPath(page);
    const context = await getContext(page, options.acf);
    const template = getTemplate(page);

    createPage({
      component: template,
      context: {
        ...context,
        contactForms,
      },
      path: pagePath,
    });
  }));

  await Promise.all(Object.values(Languages).map(async lang => {
    const error404 = await fetchEntities(
      Endpoints.NOT_FOUND,
      undefined,
      { lang }
    );

    const prefix = lang === Languages.polish ? '/' : `/${lang}/`;

    const options: { acf: Options } = await fetchEntities(
      Endpoints.GLOBALS,
      undefined,
      { lang }
    );

    createPage(
      {
        component: templates.notFound,
        context: {
          content: error404.acf,
          options: parseOptions(options.acf),
        },
        path: `${prefix}404`,
      }
    );
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
