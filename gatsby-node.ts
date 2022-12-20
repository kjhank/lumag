import type { GatsbyNode } from 'gatsby';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import { Endpoints } from './src/constants/endpoints';
import {
  Languages, Page, Post,
} from './src/types';
import { RequestParams } from '@/types/global';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const templates = {
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

// export const pingDb = async () => {
//   const url = getUrl();

//   const response = await fetch(url);
//   const result = await response.json();

//   return result;
// };

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

const getContext = ({
  id, date, slug, status, title, parent: parentId, meta, lang,
} : Page) => {
  const globalContext = {
    date,
    id,
    lang,
    metadata: {
      ...meta,
      title,
    },
    parentId,
    slug,
    status,
  };

  // TODO: translations slugs + ACF parsing

  return globalContext;
};

const getTemplate = ({
  acf:
  {
    template:
    { value: pageTemplate },
  },
}: Page) => templates[pageTemplate as keyof typeof templates];

const getPath = ({
  slug, lang,
}: Page) => {
  if (lang === Languages.polish) {
    return slug === 'home' ? '/' : `/${slug}/`;
  }

  if (lang === Languages.russian) {
    return `/${lang}/${decodeURIComponent(slug)}`;
  }

  return `/${lang}/${slug}`;
};

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;
  const pages: Array<Page> = await fetchEntities(Endpoints.PAGES, undefined, { per_page: '30' }, true);
  const posts: Array<Post> = await fetchEntities(Endpoints.POSTS);

  pages.forEach(page => {
    if (page === undefined) return;
    const pagePath = getPath(page);
    const context = getContext(page);
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
  });
};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};
