import { ACFImage, Video } from '@/types';

export type Layout = 'imageRight' | 'imageLeft' | 'alternating' | 'alternating-reverse';

export type TextWithMediaProps = {
  as?: keyof JSX.IntrinsicElements;
  backgroundIndex?: number;
  fontSize?: number;
  heading: string;
  layout?: Layout;
  text: string;
} & ({
  image?: ACFImage;
  video?: never;
} | {
  image?: never;
  video?: Video;
});
