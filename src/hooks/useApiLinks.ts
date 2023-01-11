import { backendUrl } from '@/static';

export const useApiLinks = (urlString: string) => {
  const url = new URL(urlString);
  const siteUrl = new URL(backendUrl as string);
  const isExternal = url.origin !== siteUrl.origin;

  if (isExternal) return urlString;

  return url.pathname;
};
