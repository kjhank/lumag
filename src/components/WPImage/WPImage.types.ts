import { ACFImage } from '@/types';

export type WPImageProps = {
  alt?: string;
  className?: string;
  imageData: ACFImage;
  isLazy?: boolean;
};
