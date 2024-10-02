import type { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { HTMLInputTypeAttribute } from 'react';

export type WrapPageElement =
  | GatsbyBrowser['wrapPageElement']
  | GatsbySSR['wrapPageElement'];

export type WrapPageProps = {
  element: any;
  props: {
    [key: string]: unknown;
  };
};

export type Breakpoint = 'xxl' | 'xl' | 'l' | 'ml' | 'm' | 's' | 'xs' | 'xxs';

export type QueryKey = 'landscape' | 'touch' | 'nonTouch' | 'portrait' | Breakpoint;

export type FieldsMap = Array<{
  allowedFileTypes?: string[];
  description?: string;
  file?: string;
  isRequired?: boolean;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute | 'textarea' | 'dumb';
}>;
