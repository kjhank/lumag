import {
  ACFImage, ACFPage, SeeMore,
} from '@/types';

export type SeeMoreProps = SeeMore;

export type RecommendationProps = {
  item: {
    background: ACFImage;
    heading: string;
    linkText: string;
    text: string;
    url: ACFPage;
  };
};
