import { ACFImage, IconSlug } from '@/types';

export type Icon = {
  iconslug: IconSlug;
  text: string;
};

export type IconProps = {
  icon: Icon;
};

export type WhyDifferentProps = {
  background: ACFImage;
  heading: string;
  iconsList: Array<Icon>;
};
