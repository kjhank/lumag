/* eslint-disable sort-keys */
import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { getClamped, getMin } from './helpers';
import { ThemeProps } from './theme.types';

const theme: DefaultTheme = {
  colors: {
    brand: '#fabf3a',
    neutral: {
      5: '#ffffff',
      10: '#fdfdfd',
      15: '#f6f7f6',
      30: '#acaeb1',
      55: '#969696',
      50: '#929292',
      60: '#8b8b8b',
      95: '#474748',
      100: '#404041',
    },
  },
  fonts: {
    sizes: {
      hero: getClamped(71),
      xxl: getClamped(56),
      xl: getClamped(40),
      l: getClamped(34),
      m: getClamped(28),
      s: getClamped(20),
      xs: getClamped(14),
      xxs: getClamped(12),
    },
    types: {
      heading: 'Avenir, serif',
      text: 'Helvetica, sans-serif',
    },
  },
  global: {
    contact: {
      addressFontSize: getClamped(14),
      newsletterFontSize: getClamped(12),
      newsletterHeadingSize: getClamped(34),
      newsletterSubmitFontSize: getClamped(14),
      newsletterSubmitPaddingBlock: getMin(26),
      get newsletterSubmitBackgroundColor() { return theme.colors.neutral['100']; },
      get newsletterSubmitColor() { return theme.colors.neutral['5']; },
      socialsLinkSize: getMin(35),
      logoWidth: getMin(250),
    },
    footer: {
      get backgroundColor() { return theme.colors.neutral['15']; },
      bannerFontSize: getClamped(12),
      bannerGap: getMin(15),
      bannerLogoWidth: '1.17em',
      bannerPaddingBlock: getMin(44),
      get heading() { return theme.colors.neutral['55']; },
      get linkColor() { return theme.colors.neutral['95']; },
      linkGap: '1em',
      linkLineHeight: 1,
      paddingBlock: getMin(56),
      get separator() { return theme.colors.neutral['60']; },
    },
    header: {
      buttonsGap: getMin(9),
      buttonSize: getMin(31),
      linkGap: getMin(66),
      paddingBlock: getMin(34),
    },
    promoted: {
      gap: '7.26%',
      headingPaddingBlockEnd: getMin(70),
      headingFontSize: getMin(40),
      itemDescriptionColor: '',
      itemDescriptionFontSize: '',
      itemFilter: '',
      itemHeadingColor: '',
      itemHeadingFontSize: '',
      linkBackgroundColor: '',
      linkColor: '',
      linkTranslate: '',
      paddingBlock: getMin(55),
    },
  },
  transitions: {
    default: '0.4s',
  },
};

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
