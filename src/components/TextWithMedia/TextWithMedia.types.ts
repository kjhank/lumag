import { IOptions } from 'sanitize-html';
import {
  ACFImage, Gallery, Video,
} from '@/types';

export type Layout = 'imageRight' | 'imageLeft' | 'alternating' | 'alternating-reverse';

export type MediaVariant = {
  images?: never;
  image?: ACFImage;
  video?: never;
} | {
  images?: never;
  image?: never;
  video?: Video;
} | {
  images: Gallery;
  image?: never;
  video?: never;
};

export type GalleryProps = {
  initialIndex: number;
  images: Gallery;
};

export type TextWithMediaProps = {
  as?: keyof JSX.IntrinsicElements;
  backgroundIndex?: number;
  className?: string;
  textElement?: keyof JSX.IntrinsicElements;
  defaultImageIndex: number;
  fontSize?: number;
  hasDecoration?: boolean;
  hasExtraPadding?: boolean;
  heading: string;
  layout?: Layout;
  sanitizeConfig?: IOptions;
  text: string;
} & MediaVariant;
