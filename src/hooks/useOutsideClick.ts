import { useEffect } from 'react';
import { UseOutsideClick } from './hooks.types';

export const useOutsideClick: UseOutsideClick
  = (ref, callback) => {
    useEffect(() => {
      const eventListener = (event: MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) return;

        callback(event);
      };

      document.addEventListener('click', eventListener);

      return () => document.removeEventListener('click', eventListener);
    }, [ref, callback]);
  };
