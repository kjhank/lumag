import { PageProps } from 'gatsby';
import React from 'react';
import {
  ACFImage,
  FooterMenu,
  I18n, Languages, Newsletter, PageContext, ParsedMenu, Social,
} from '@/types';

export type LayoutProps = {
  children: React.ReactNode;
} & PageProps & { pageContext: PageContext };

export type HeaderProps = {
  menuItems: Array<ParsedMenu>;
  i18n: I18n;
  pageLang: Languages;
};

export type NavigationProps = {
  menuItems: Array<ParsedMenu>;
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
};
