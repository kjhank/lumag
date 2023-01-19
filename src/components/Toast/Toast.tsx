import {
  useEffect, useRef, useState,
} from 'react';
import { useOutsideClick } from '@/hooks';
import { CloseButton, ToastNode } from './Toast.styled';
import { ToastProps } from './Toast.types';

export const Toast = ({
  children, variant = 'neutral', close,
}: ToastProps) => {
  const [isVisible, setVisible] = useState(false);
  const toastRef = useRef<HTMLElement>(null);

  useOutsideClick(toastRef, () => setVisible(false));

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLElement>) => {
    event.persist();
    const { currentTarget: { dataset } } = event;

    if (dataset.visible === 'false') {
      close();
    }
  };

  return (
    <ToastNode
      data-visible={isVisible}
      isVisible={isVisible} onTransitionEnd={handleTransitionEnd}
      ref={toastRef}
      variant={variant}
    >
      <CloseButton
        onClick={() => setVisible(false)} type="button"
        variant={variant}
      >
        <span>
          ⨉
        </span>
      </CloseButton>
      {children}
    </ToastNode>
  );
};
