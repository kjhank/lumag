import React from 'react';
import { GlobalStyle, Theme } from '@/theme';
import { LayoutProps } from './Layout.types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// TODO: global header & footer as slices

const Layout = ({ children, pageContext }: LayoutProps) => (
  <Theme>
    <GlobalStyle />
    <Header
      i18n={pageContext?.i18n} menuItems={pageContext?.options?.nav}
      pageLang={pageContext?.lang}
    />
    {children}
    <Footer
      address={pageContext?.options?.address} background={pageContext?.options?.footer?.background}
      copyright={pageContext?.options?.footer?.copyright}
      nav={pageContext?.options?.footer?.nav}
      newsletter={pageContext?.options?.newsletter}
      socials={pageContext?.options?.socials}
    />
  </Theme>
);

export default Layout;
