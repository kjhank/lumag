import { Image } from '@/types';

export type WPImageProps = {
  alt: string;
  imageData: Image;
  isLazy: boolean;
} & HTMLPictureElement;
