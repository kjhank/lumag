import { useRef } from 'react';

export const usePortal = (
  attachToSelector?: keyof HTMLElementTagNameMap
) => {
  let targetNode: HTMLElement | null = attachToSelector ? document.querySelector(attachToSelector) : document.querySelector('#___gatsby');
  const nodeRef = useRef<HTMLDialogElement>(document.createElement('dialog'));

  if (targetNode) {
    targetNode.appendChild(nodeRef.current);
  } else {
    targetNode = document.body;
  }

  return {
    targetNode,
  };
};
