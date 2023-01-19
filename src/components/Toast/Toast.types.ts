import { ToastVariant } from '@/types';

export type ToastProps = {
  children: React.ReactNode;
  close: () => void;
  variant?: ToastVariant;
};
