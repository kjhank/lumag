import { createPortal } from 'react-dom';
import { isBrowser } from '@/utils';
import {
  CloseButton, ModalContainer, ModalWrapper,
} from './Modal.styled';
import { ModalProps } from './Modal.types';

export const Modal = ({
  aspectRatio = 'auto', children, isOpen, onCloseCallback = () => { }, variant = 'white',
}: ModalProps) => {
  const handleClose = () => {
    onCloseCallback();
  };

  return isBrowser && isOpen
    ? createPortal(
      <ModalWrapper open={isOpen} variant={variant}>
        <ModalContainer $aspectRatio={aspectRatio} variant={variant}>
          <CloseButton onClick={handleClose}>⨉</CloseButton>
          {children}
        </ModalContainer>
      </ModalWrapper>,
      document.body
    )
    : null;
};
