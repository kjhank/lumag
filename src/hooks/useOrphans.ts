export const useOrphans = (text: string): string => text.replace(/ [a-zA-Z] /, (value: string) => {
  const trimmed = value.trimEnd();

  // eslint-disable-next-line no-irregular-whitespace
  return `${trimmed} `;
});
