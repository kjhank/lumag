import { ACFImage } from '@/types';

export type Buttons = {
  active: string;
  inactive: string;
};

export type ExpandableItemProps = {
  className?: string;
  children?: React.ReactNode;
  buttons: Buttons;
  image: ACFImage;
  text: string;
  title: string;
  trimmedTextLength?: number;
};
