import {
  News, Post, PromoItem,
} from '@/types';

export type NewsPromosProps = {
  news: News;
  posts: Array<Post>;
  promoAside: Array<PromoItem>;
};

export type NewsItemProps = {
  linkLabel: string;
  post: Post;
};
