import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { UseAnchors } from './hooks.types';
import { backendUrl } from '@/static';

const siteUrl = new URL(backendUrl as string);

export const useAnchors: UseAnchors = nodeRef => {
  const handleClick = (event: MouseEvent) => {
    const { href } = event.currentTarget as HTMLAnchorElement;
    const { origin: linkOrigin, pathname } = new URL(href);
    const isExternal = linkOrigin !== siteUrl.origin;

    if (isExternal) return;

    event.preventDefault();

    navigate(pathname);
  };

  const transformUrls = (anchors: Array<HTMLAnchorElement>) => {
    anchors.forEach(anchor => {
      const node = anchor;
      const { pathname } = new URL(node.href);
      const url = new URL(node.href);

      const isExternal = url.origin !== siteUrl.origin;

      if (isExternal) return;

      node.href = `${pathname}`;
    });
  };

  useEffect(() => {
    const { current: node } = nodeRef;

    if (node) {
      const anchors = Array.from(node.querySelectorAll('a'));

      if (anchors.length === 0) return;

      transformUrls(anchors);

      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleClick);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
