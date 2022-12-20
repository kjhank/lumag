export const viewportBase = 19.2;

export const getClamped = (sizePx: number): string => {
  const optimum = `0.5rem + ${Math.ceil((sizePx - 8) / viewportBase)}vw`;

  if (sizePx <= 16) {
    return `clamp(8px, ${optimum}, ${sizePx}px)`;
  }

  return `clamp(${Math.ceil(sizePx / 2)}px, ${optimum}, ${sizePx}px)`;
};

export const getMin = (sizePx: number): string => `min(${sizePx}px, ${Math.round(sizePx / viewportBase)})`;
