export const useOrphans = (text: string, regex = / [a-zA-Z] /): string => text.replace(regex, (value: string) => {
  const trimmed = value.trimEnd();

  // eslint-disable-next-line no-irregular-whitespace
  return `${trimmed} `;
});
