import React from 'react';

export type UseOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent) => void) => void;
