import { useRef } from 'react';
import { isBrowser } from '../utils/helpers';

export const usePortal = (
  attachToSelector?: keyof HTMLElementTagNameMap
) => {
  let parentNode: HTMLElement | null = null;

  if (isBrowser) {
    parentNode = attachToSelector ? document?.querySelector(attachToSelector) : document?.querySelector('#___gatsby');
  }

  const nodeRef = useRef<HTMLDialogElement>(isBrowser ? document?.createElement('dialog') : null);

  if (isBrowser) {
    if (parentNode && nodeRef?.current) {
      parentNode.appendChild(nodeRef.current);
      nodeRef.current.open = true;
    } else {
      parentNode = document?.body;
    }
  }

  const closePortal = () => {
    if (parentNode && nodeRef?.current) {
      nodeRef.current.open = false;
      parentNode.removeChild(nodeRef.current);
    }
  };

  return {
    closePortal,
    targetNode: nodeRef.current,
  };
};
