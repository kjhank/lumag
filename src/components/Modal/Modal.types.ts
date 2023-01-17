export type ModalProps = {
  aspectRatio?: number;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseCallback?: () => void;
};
