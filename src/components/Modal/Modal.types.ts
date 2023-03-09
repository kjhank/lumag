export type ModalVariant = 'white' | 'yellow';

export type ModalProps = {
  aspectRatio?: number | 'auto';
  children: React.ReactNode;
  isOpen: boolean;
  onCloseCallback?: () => void;
  variant?: ModalVariant;
};
