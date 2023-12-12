export type ModalVariant = 'white' | 'yellow';

export type ModalProps = {
  aspectRatio?: number | 'auto';
  children: React.ReactNode;
  isOpen: boolean;
  isLarger?: boolean;
  onCloseCallback?: () => void;
  variant?: ModalVariant;
};
