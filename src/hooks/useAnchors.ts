import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { UseAnchors } from './hooks.types';

export const useAnchors: UseAnchors = nodeRef => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    const { currentTarget: { href } } = event;
    const { pathname } = new URL(href);

    navigate(pathname);
  };

  useEffect(() => {
    const { current: node } = nodeRef;

    if (node) {
      const anchors = Array.from(node.querySelectorAll('a'));

      if (anchors.length === 0) return;

      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleClick);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
