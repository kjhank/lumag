import { CarouselItem } from '@/types';

export type CarouselProps = {
  items: Array<CarouselItem>;
};

export type CarouselItemProps = {
  item: CarouselItem;
  isActive: boolean;
};
