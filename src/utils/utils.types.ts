import React from 'react';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';

export type WrapPageElement =
  | GatsbyBrowser['wrapPageElement']
  | GatsbySSR['wrapPageElement'];

export type WrapPageProps = {
  element: React.ReactNode;
  props: {
    [key: string]: unknown;
  }
};
