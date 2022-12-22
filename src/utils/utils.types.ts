import type { GatsbyBrowser, GatsbySSR } from 'gatsby';

export type WrapPageElement =
  | GatsbyBrowser['wrapPageElement']
  | GatsbySSR['wrapPageElement'];

export type WrapPageProps = {
  element: any;
  props: {
    [key: string]: unknown;
  };
};
