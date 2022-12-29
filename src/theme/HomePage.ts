import {
  getClamped, getMin,
} from './helpers';

export type HomePage = {
  carousel: {
    [key: string]: string | number;
  };
  tiles: {
    headingSize: string | number;
    tileBlockPadding: string | number;
    tileInlinePadding: string | number;
  };
};

export const homePageStyles = {
  carousel: {
    lineHeight: 1,
    paddingInline: getMin(115),
    textSize: getClamped(25),
  },
  tiles: {
    headingSize: getClamped(24),
    tileBlockPadding: `${getMin(43)} ${getMin(30)}`,
    tileInlinePadding: getMin(115),
  },
};
