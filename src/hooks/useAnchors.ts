import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { UseAnchors } from './hooks.types';

export const useAnchors: UseAnchors = nodeRef => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

    const { href } = event.currentTarget as HTMLAnchorElement;
    const { pathname } = new URL(href);

    navigate(pathname);
  };

  const transformUrls = (anchors: Array<HTMLAnchorElement>) => {
    anchors.forEach(anchor => {
      const node = anchor;
      const { pathname } = new URL(node.href);

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
