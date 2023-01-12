import { createPortal } from 'react-dom';
import {
  CloseButton, ModalContainer, ModalWrapper,
} from './Modal.styled';
import { ModalProps } from './Modal.types';
import { usePortal } from '@/hooks';

export const Modal = ({
  children, isOpen, onCloseCallback = () => {},
}: ModalProps) => {
  const { closePortal, targetNode } = usePortal() ?? {};

  if (!targetNode) return null;

  const handleClose = () => {
    closePortal();
    onCloseCallback();
  };

  return isOpen
    ? createPortal(
      <ModalWrapper>
        <ModalContainer>
          <CloseButton onClick={handleClose}>⨉</CloseButton>
          {children}
        </ModalContainer>
      </ModalWrapper>,
      targetNode
    )
    : null;
};
