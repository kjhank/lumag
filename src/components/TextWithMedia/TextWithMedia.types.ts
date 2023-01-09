import { ACFImage, Video } from '@/types';

export type Layout = 'imageRight' | 'imageLeft';

export type TextWithMediaProps = {
  heading: string;
  layout: Layout;
  text: string;
} & ({
  image?: ACFImage;
  video?: never;
} | {
  image?: never;
  video?: Video;
});
