import 'styled-components';
import { HomePage } from './HomePage';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: string;
      neutral: {
        [key: number]: string;
      };
    };
    fonts: {
      types: {
        alt: string;
        heading: string;
        text: string;
      };
      sizes: {
        hero: string;
        xxl: string;
        xl: string;
        l: string;
        m: string;
        s: string;
        xs: string;
        xxs: string;
      };
    };
    global: {
      contact: {
        addressFontSize: string;
        newsletterHeadingSize: string;
        newsletterFontSize: string;
        newsletterSubmitFontSize: string;
        newsletterSubmitBackgroundColor: string;
        newsletterSubmitColor: string;
        newsletterSubmitPaddingBlock: string;
        socialsLinkSize: string;
        logoWidth: string;
      };
      header: {
        buttonsGap: string;
        buttonSize: string;
        paddingBlock: string;
        linkGap: string;
      };
      footer: {
        backgroundColor: string;
        bannerFontSize: string;
        bannerLogoWidth: string;
        bannerPaddingBlock: string;
        bannerGap: string;
        heading: string;
        linkColor: string;
        linkGap: string;
        linkLineHeight: string | number;
        paddingBlock: string;
        separator: string;
      };
      promoted: {
        headingFontSize: string;
        headingPaddingBlockEnd: string;
        itemHeadingFontSize: string;
        itemHeadingColor: string;
        itemDescriptionFontSize: string;
        itemDescriptionColor: string;
        itemFilter: string;
        linkColor: string;
        linkBackgroundColor: string;
        linkTranslate: string;
        paddingBlock: string;
        gap: string;
      };
    };
    helpers: {
      getClamped: (sizePx: number) => string;
      getMax: (sizePx: number) => string;
      getMin: (sizePx: number) => string;
    };
    radii: {
      buttonLink: string;
    };
    transitions: {
      fast?: string;
      default: string;
      slow?: string;
    };
    pages: {
      homePage: HomePage;
    };
  }
}
