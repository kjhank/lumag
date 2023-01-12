import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ scrollDisabled?: boolean }>`
  html {
    overflow: ${({ scrollDisabled }) => (scrollDisabled ? 'hidden' : 'auto')};
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  button,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    border: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-family: ${({ theme }) => theme.fonts.types.text};
    line-height: 1.2;
  }

  ol[class],
  ul[class] {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;

    &::before,
    &::after {
      content: '';
      content: none;
    }
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  sup {
    font-size: 50%;
    vertical-align: super;
  }

  sub {
    font-size: 50%;
    vertical-align: sub;
  }

  .visually-hidden:not(:focus, :active) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    width: 1px;
    clip-path: inset(100%);
    height: 1px;
    white-space: nowrap;
  }

  @font-face {
    font-style: normal;
    font-weight: bold;
    font-family: 'Helvetica';
    font-display: swap;
    src:
      local('Helvetica Bold'),
      local('Helvetica-Bold'),
      url('/assets/fonts/subset-Helvetica-Bold.woff2') format('woff2'),
      url('/assets/fonts/subset-Helvetica-Bold.woff') format('woff');
  }

  @font-face {
    font-style: normal;
    font-weight: 900;
    font-family: 'Avenir LT Std';
    src:
      local('Avenir LT Std 95 Black'),
      local('AvenirLTStd-Black'),
      url('/assets/fonts/subset-AvenirLTStd-Black.woff2') format('woff2'),
      url('/assets/fonts/subset-AvenirLTStd-Black.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: 'Helvetica';
    src:
      local('Helvetica'),
      url('/assets/fonts/subset-Helvetica.woff2') format('woff2'),
      url('/assets/fonts/subset-Helvetica.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: normal;
    font-family: 'Helvetica';
    src:
      local('Helvetica Oblique'),
      local('Helvetica-Oblique'),
      url('/assets/fonts/subset-Helvetica-Oblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Helvetica-Oblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: 'Lato';
    src:
      local('Lato Regular'),
      local('Lato-Regular'),
      url('/assets/fonts/subset-Lato-Regular.woff2') format('woff2'),
      url('/assets/fonts/subset-Lato-Regular.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: bold;
    font-family: 'Helvetica';
    src:
      local('Helvetica Bold Oblique'),
      local('Helvetica-BoldOblique'),
      url('/assets/fonts/subset-Helvetica-BoldOblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Helvetica-BoldOblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: 900;
    font-family: 'Lato';
    src:
      local('Lato Black'),
      local('Lato-Black'),
      url('/assets/fonts/subset-Lato-Black.woff2') format('woff2'),
      url('/assets/fonts/subset-Lato-Black.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: 'Avenir';
    src:
      local('Avenir Medium'),
      local('Avenir-Medium'),
      url('/assets/fonts/subset-Avenir-Medium.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Medium.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: normal;
    font-family: 'Avenir';
    src:
      local('Avenir Oblique'),
      local('Avenir-Oblique'),
      url('/assets/fonts/subset-Avenir-Oblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Oblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: normal;
    font-family: 'Avenir Book';
    src:
      local('Avenir Book Oblique'),
      local('Avenir-BookOblique'),
      url('/assets/fonts/subset-Avenir-BookOblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-BookOblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: 'Avenir';
    src:
      local('Avenir Roman'),
      local('Avenir-Roman'),
      url('/assets/fonts/subset-Avenir-Roman.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Roman.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: 900;
    font-family: 'Avenir';
    src:
      local('Avenir Heavy'),
      local('Avenir-Heavy'),
      url('/assets/fonts/subset-Avenir-Heavy.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Heavy.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: 'Avenir Book';
    src:
      local('Avenir Book'),
      local('Avenir-Book'),
      url('/assets/fonts/subset-Avenir-Book.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Book.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: 300;
    font-family: 'Avenir';
    src:
      local('Avenir Light'),
      local('Avenir-Light'),
      url('/assets/fonts/subset-Avenir-Light.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Light.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: 900;
    font-family: 'Avenir';
    src:
      local('Avenir Heavy Oblique'),
      local('Avenir-HeavyOblique'),
      url('/assets/fonts/subset-Avenir-HeavyOblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-HeavyOblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: 500;
    font-family: 'Avenir';
    src:
      local('Avenir Medium Oblique'),
      local('Avenir-MediumOblique'),
      url('/assets/fonts/subset-Avenir-MediumOblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-MediumOblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: normal;
    font-weight: 900;
    font-family: 'Avenir';
    src:
      local('Avenir Black'),
      local('Avenir-Black'),
      url('/assets/fonts/subset-Avenir-Black.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-Black.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: 900;
    font-family: 'Avenir Black Oblique';
    src:
      local('Avenir Black Oblique'),
      local('Avenir-BlackOblique'),
      url('/assets/fonts/subset-Avenir-BlackOblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-BlackOblique.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-style: italic;
    font-weight: 300;
    font-family: 'Avenir';
    src:
      local('Avenir Light Oblique'),
      local('Avenir-LightOblique'),
      url('/assets/fonts/subset-Avenir-LightOblique.woff2') format('woff2'),
      url('/assets/fonts/subset-Avenir-LightOblique.woff') format('woff');
    font-display: swap;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
`;
