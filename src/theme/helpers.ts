/**
 * Internal dependencies
 */
export const viewportBase = 19.2;
export const viewportMax = '1920px';
export const viewportMin = '320px';

const allUnits = {
  px: {
    label: 'px',
    step: 1,
    value: 'px',
  },
  rem: {
    label: 'rem',
    step: 0.01,
    value: 'rem',
  },
};

/**
 * Units of measurements.
 */
export const UNITS = Object.values(allUnits);

/**
 * Parses a number and unit from a value.
 */
export const parseUnit = (value: string): [string, string, number] => {
  const num = value.replace('px', '').replace('rem', '');

  const unitMatches = value.match(/[\d.\-+]*\s*(.*)/);
  const unit = unitMatches !== null ? unitMatches[1] : '';
  const match = UNITS.find(item => item.value === unit);

  return [
    num,
    match?.value || 'px',
    match?.step || 1,
  ];
};

const convertToRem = (value: string, root: number): number => {
  const [num, unit] = parseUnit(value);

  if (unit === 'rem') {
    return parseFloat(num);
  }

  return parseFloat(num) / root;
};

const toFixed = (value: number) => parseFloat(value.toFixed(4));

export const getClamped = (
  maxPx: number,
  minPx?: number,
  rootPx?: number
): string => {
  const root = parseInt(`${rootPx ?? 16}px`, 10);

  const minFontSize = convertToRem(`${minPx ?? maxPx / 2}px`, root);
  const maxFontSize = convertToRem(`${maxPx}px`, root);
  const minWidth = convertToRem(viewportMin, root);
  const maxWidth = convertToRem(viewportMax, root);

  if ([
    minFontSize,
    maxFontSize,
    minWidth,
    maxWidth,
  ].some(v => Number.isNaN(v))) {
    return '';
  }

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = toFixed(-minWidth * slope + minFontSize);

  const min = `${minFontSize}rem`;
  const max = `${maxFontSize}rem`;
  const preferred = `${yAxisIntersection}rem + ${toFixed(slope * 100)}vw`;

  return `
  font-size: ${min};
  font-size: clamp(${min}, ${preferred}, ${max});
  `;
};

// export const getClamped = (sizePx: number): string => {
//   const optimum = `0.5rem + ${Math.ceil((sizePx - 8) / viewportBase)}vw`;

//   if (sizePx <= 16) {
//     return `clamp(8px, ${optimum}, ${sizePx}px)`;
//   }

//   return `clamp(${Math.ceil(sizePx / 2)}px, ${optimum}, ${sizePx}px)`;
// };

export const getMin = (sizePx: number): string => {
  const precision = 2;
  const coefficient = 10 ** precision;

  return `min(${sizePx}px, ${Math.ceil((sizePx / viewportBase) * coefficient) / coefficient}vw)`;
};

export const getMax = (sizePx: number): string => {
  const precision = 2;
  const coefficient = 10 ** precision;

  return `max(${sizePx}px, ${Math.ceil((sizePx / viewportBase) * coefficient) / coefficient}vw)`;
};
