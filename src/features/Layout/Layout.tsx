import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import { GlobalStyle, Theme } from '@/theme';
import { AppContextState, LayoutProps } from './Layout.types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookiesDialog, PopupBody } from './Layout.styled';
import { Container } from '../../components/Container/Container';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';
import { useAnchors } from '@/hooks';
import { AppContext } from './Layout.context';
import { cookiesKey } from '@/static';
import {
  Modal, SeeMore, WPImage, WYSIWYG,
} from '@/components';
import { sanitizeConfig as globalSanitizeConfig } from '@/utils/globalConfigs';

// TODO: global header & footer as slices

const sanitizeConfig: IOptions = {
  allowedTags: ['a'],
};

const Layout = ({
  children, location: { pathname }, pageContext,
}: LayoutProps) => {
  const cookiesRef = useRef(null);
  const [cookiesVisible, setCookiesVisible] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState<boolean>(
    pageContext.options?.popup?.isInitiallyOpen as boolean ?? false
  );

  const toggleInfoPopup = () => setInfoPopupOpen(current => !current);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextData: AppContextState = useMemo(() => ({
    contactForms: pageContext?.contactForms,
    defaultNewsThumbnail: pageContext?.options?.defaultNewsThumbnail,
    lang: pageContext.lang,
    urlPrefix: pageContext.lang === 'pl' ? '/' : `/${pageContext.lang}/`,
  }), [
    pageContext?.lang,
    pageContext?.contactForms,
    pageContext?.options?.defaultNewsThumbnail,
  ]);

  return (
    <AppContext.Provider value={contextData}>
      <Theme>
        <GlobalStyle noScroll={isInfoPopupOpen} />
        <Header
          i18n={pageContext?.i18n}
          isPopupActive={pageContext.options?.isPopupActive}
          menuItems={pageContext?.options?.nav}
          pathname={pathname}
          search={pageContext?.options?.search}
          searchMessages={pageContext?.options?.searchMessages}
          toggleInfoPopup={toggleInfoPopup}
        />
        {children}
        {pageContext.content?.seeMore?.hasSeeMore && <SeeMore {...pageContext.content.seeMore} />}
        <Footer
          address={pageContext?.options?.address}
          background={pageContext?.options?.footer?.background}
          copyright={pageContext?.options?.footer?.copyright}
          nav={pageContext?.options?.footer?.nav}
          newsletter={pageContext?.options?.newsletter}
          socials={pageContext?.options?.socials}
          verticalBackground={pageContext?.options?.footer?.verticalBackground}
        />
        <CookiesDialog isVisible={cookiesVisible} ref={cookiesRef}>
          <Container>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: sanitize(pageContext?.options?.cookiesText, sanitizeConfig),
              }}
            />
            <ButtonLink hasArrow={false} onClick={handleCookies}>
              {pageContext?.options?.cookiesButtonText}
            </ButtonLink>
          </Container>
        </CookiesDialog>
        {pageContext.options?.popup && pageContext.options.isPopupActive && (
          <Modal
            isOpen={isInfoPopupOpen} onCloseCallback={toggleInfoPopup}
            variant="yellow"
          >
            <PopupBody>
              {pageContext.options?.popup?.hasImage
                && <WPImage imageData={pageContext.options.popup.image} />}
              <WYSIWYG html={sanitize(pageContext.options.popup.content.split('<h2>').join('<h2><span>')
                .split('</h2>')
                .join('</span></h2>')
                .split('<video ')
                .join('<video controls '), {
                ...globalSanitizeConfig,
              })}
              />
            </PopupBody>
          </Modal>
        )}
      </Theme>
    </AppContext.Provider>
  );
};

export default Layout;
