import { backendUrl, homePages } from '@/static';
import { useAppContext } from './useAppContext';

export const useApiLinks = (urlString: string) => {
  const { urlPrefix } = useAppContext();
  const url = new URL(urlString);
  const siteUrl = new URL(backendUrl as string);
  const isExternal = url.origin !== siteUrl.origin;

  if (isExternal) return urlString;

  return homePages.includes(url.pathname) ? urlPrefix : url.pathname;
};
