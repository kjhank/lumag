import { createPortal } from 'react-dom';
import {
  CloseButton, ModalContainer, ModalWrapper,
} from './Modal.styled';
import { ModalProps } from './Modal.types';
import { usePortal } from '@/hooks';

export const Modal = ({
  close, children, isOpen,
}: ModalProps) => {
  const { targetNode } = usePortal();

  return isOpen
    ? createPortal(
      <ModalWrapper>
        <ModalContainer>
          <CloseButton onClick={close}>⨉</CloseButton>
          {children}
        </ModalContainer>
      </ModalWrapper>,
      targetNode
    )
    : null;
};
