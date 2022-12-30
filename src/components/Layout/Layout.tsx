import React, {
  useEffect, useRef, useState,
} from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import { GlobalStyle, Theme } from '@/theme';
import { LayoutProps } from './Layout.types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookiesDialog } from './Layout.styled';
import { Container } from '../Container/Container';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { useAnchors } from '@/hooks';

// TODO: global header & footer as slices

const sanitizeConfig: IOptions = {
  allowedTags: ['a'],
};

const Layout = ({ children, pageContext }: LayoutProps) => {
  const cookiesKey = process.env.GATSBY_COOKIES_LS_KEY;
  const cookiesRef = useRef(null);
  const [cookiesVisible, setCookiesVisible] = useState(false);

  const handleCookies = () => {
    if (cookiesVisible) {
      setCookiesVisible(false);
      localStorage.setItem(cookiesKey as string, 'true');
    }
  };

  useAnchors(cookiesRef);

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(cookiesKey as string) === 'true';

    if (!hasUserAgreed) {
      setCookiesVisible(true);
    }
  }, []);

  return (
    <Theme>
      <GlobalStyle scrollDisabled={cookiesVisible} />
      <Header
        i18n={pageContext?.i18n} menuItems={pageContext?.options?.nav}
        pageLang={pageContext?.lang}
      />
      {children}
      <Footer
        address={pageContext?.options?.address}
        background={pageContext?.options?.footer?.background}
        copyright={pageContext?.options?.footer?.copyright}
        nav={pageContext?.options?.footer?.nav}
        newsletter={pageContext?.options?.newsletter}
        socials={pageContext?.options?.socials}
      />
      <CookiesDialog isVisible={cookiesVisible} ref={cookiesRef}>
        <Container>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(pageContext.options.cookiesText, sanitizeConfig),
            }}
          />
          <ButtonLink hasArrow={false} onClick={handleCookies}>
            {pageContext.options.cookiesButtonText}
          </ButtonLink>
        </Container>
      </CookiesDialog>
    </Theme>
  );
};

export default Layout;
