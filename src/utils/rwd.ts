/* eslint-disable sort-keys */

export const breakpoints = {
  xxl: 1440,
  xl: 1280,
  l: 1024,
  m: 920,
  s: 768,
  xs: 480,
  xxs: 360,
};

type Breakpoint = keyof typeof breakpoints;
type MediaQueries = keyof typeof mediaQueries;

const mediaQueries = {
  landscape: '(orientation: landscape)',
  nonTouch: '(pointer: fine)',
  touch: '(hover: none) and (pointer: coarse)',
  portrait: '(orientation: portrait)',
};

/* eslint-enable sort-keys */

const mfQueries = {
  ...mediaQueries,
};

Object.keys(breakpoints).forEach(size => {
  mediaQueries[size as MediaQueries] = `(max-width: ${breakpoints[size as Breakpoint]}px)`;
});

Object.keys(breakpoints).forEach(size => {
  mfQueries[size as MediaQueries] = `(min-width: ${breakpoints[size as Breakpoint]}px)`;
});

export {
  mediaQueries,
  mfQueries,
};
