export const useOrphans = (text: string = '', regex?: string): string | React.ReactNode => {
  if (regex) {
    return text.replace(regex, (value: string) => {
      const trimmed = value.trimEnd();

      // eslint-disable-next-line no-irregular-whitespace
      return `${trimmed}${String.fromCharCode(160)}`;
    });
  }

  return text.split(' ').map(part => {
    if (part.length === 1) {
      return [' ', part + String.fromCharCode(160)];
    }

    return `${part} `;
  });
};
