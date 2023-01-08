import { ACFImage } from '@/types';

export type Layout = 'imageRight' | 'imageLeft';

export type TextWithImageProps = {
  heading: string;
  image: ACFImage;
  layout: Layout;
  text: string;
};
