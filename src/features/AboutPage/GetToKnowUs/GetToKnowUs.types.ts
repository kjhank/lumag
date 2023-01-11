import { Layout } from '@/components/TextWithMedia/TextWithMedia.types';
import { AboutItem, Video } from '@/types';

export type GetToKnowUsProps = {
  heading: string;
  layout?: Layout;
  list: Array<AboutItem>;
  video: Video;
};
