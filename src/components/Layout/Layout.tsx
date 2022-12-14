import React from 'react';

import { GlobalStyle, Theme } from '@/theme';
import { Container } from '@/components';
import { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps) => (
  <Theme>
    <GlobalStyle />
    <header>
      <Container>I&apos;m a header</Container>
    </header>
    {children}
    <footer>
      <Container>
        I am a footer
      </Container>
    </footer>
  </Theme>
);

export default Layout;
