import { IOptions } from 'sanitize-html';
import { ACFImage, Video } from '@/types';

export type Layout = 'imageRight' | 'imageLeft' | 'alternating' | 'alternating-reverse';

export type TextWithMediaProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  contentElement?: keyof JSX.IntrinsicElements;
  backgroundIndex?: number;
  fontSize?: number;
  hasDecoration?: boolean;
  hasExtraPadding?: boolean;
  heading: string;
  layout?: Layout;
  sanitizeConfig?: IOptions;
  text: string;
} & ({
  image?: ACFImage;
  video?: never;
} | {
  image?: never;
  video?: Video;
});
