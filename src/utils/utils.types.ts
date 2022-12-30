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

export type Breakpoint = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';

export type QueryKey = 'landscape' | 'touch' | 'nonTouch' | 'portrait' | Breakpoint;
