/* eslint-disable sort-keys */

import { Breakpoint, QueryKey } from '../utils/utils.types';

export const breakpoints: {
  [key in Breakpoint]: string;
} = {
  xxl: '1440px',
  xl: '1280px',
  l: '1024px',
  m: '920px',
  s: '768px',
  xs: '480px',
  xxs: '36px',
};

export const mediaQueries: {
  [key in QueryKey]: string;
} = {
  landscape: '@media((orientation: landscape))',
  nonTouch: '@media((pointer: fine))',
  touch: '@media((hover: none) and (pointer: coarse))',
  portrait: '@media((orientation: portrait))',
  ...Object.keys(breakpoints).reduce((prev, curr) => ({
    ...prev,
    [curr]: `@media((max-width: ${breakpoints[curr as Breakpoint]}))`,
  }), {} as { [key in Breakpoint]: string }),
};

const mfQueries: {
  [key in QueryKey]: string;
} = {
  landscape: '@media((orientation: landscape))',
  nonTouch: '@media((pointer: fine))',
  touch: '@media((hover: none) and (pointer: coarse))',
  portrait: '@media((orientation: portrait))',
  ...Object.keys(breakpoints).reduce((prev, curr) => ({
    ...prev,
    [curr]: `@media((min-width: ${breakpoints[curr as Breakpoint]}))`,
  }), {} as { [key in Breakpoint]: string }),
};
/* eslint-enable sort-keys */

Object.keys(breakpoints).forEach(size => {
  mfQueries[size as QueryKey] = `(min-width: ${breakpoints[size as Breakpoint]})`;
});

// export {
//   mfQueries,
// };
