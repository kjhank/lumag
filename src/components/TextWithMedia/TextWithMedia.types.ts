import { ACFImage, Video } from '@/types';

export type Layout = 'imageRight' | 'imageLeft' | 'alternating';

export type TextWithMediaProps = {
  as?: keyof JSX.IntrinsicElements;
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
