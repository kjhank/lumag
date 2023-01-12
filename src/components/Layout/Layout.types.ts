import { PageProps } from 'gatsby';
import React from 'react';
import {
  ACFImage,
  FooterMenu,
  I18n, Languages, Newsletter, PageContext, ParsedMainNav, Social,
} from '@/types';

export type LayoutProps = {
  children: React.ReactNode;
} & PageProps & { pageContext: PageContext };

export type HeaderProps = {
  menuItems: Array<ParsedMainNav>;
  i18n: I18n;
  pathname: string;
  search: string;
};

export type NavigationProps = {
  menuItems: Array<ParsedMainNav>;
};

export type LanguageSwitcherProps = {
  i18n: I18n;
  pageLang: Languages;
};

export type FooterProps = {
  address: string;
  background: ACFImage;
  copyright: string;
  nav: Array<FooterMenu>;
  newsletter: Newsletter;
  socials: Array<Social>;
  verticalBackground: ACFImage;
};

export type SearchProps = {
  placeholder: string;
  toggle: () => void;
};

export type AppContextState = {
  defaultNewsThumbnail: ACFImage;
  lang: Languages;
  urlPrefix: string;
};
