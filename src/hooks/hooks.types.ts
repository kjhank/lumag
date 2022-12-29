import React from 'react';

export type UseOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent) => void) => void;

export type UseAnchors = <T extends HTMLElement = HTMLElement>(
  nodeRef: React.RefObject<T>) => void;
