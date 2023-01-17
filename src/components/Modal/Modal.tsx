import { createPortal } from 'react-dom';
import { isBrowser } from '@/utils';
import {
  CloseButton, ModalContainer, ModalWrapper,
} from './Modal.styled';
import { ModalProps } from './Modal.types';

export const Modal = ({
  aspectRatio, children, isOpen, onCloseCallback = () => { },
}: ModalProps) => {
  const handleClose = () => {
    onCloseCallback();
  };

  return isBrowser && isOpen
    ? createPortal(
      <ModalWrapper open={isOpen}>
        <ModalContainer $aspectRatio={aspectRatio}>
          <CloseButton onClick={handleClose}>⨉</CloseButton>
          {children}
        </ModalContainer>
      </ModalWrapper>,
      document.body
    )
    : null;
};
