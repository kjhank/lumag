import { PageProps } from 'gatsby';
import { Languages, Post } from './wordpress';

export type PageMeta = {
  title: {
    rendered: string;
  }
};

export type PageContext = {
  date: string;
  id: number;
  lang: Languages;
  metadata: PageMeta;
  parentId?: number;
  slug: string;
};

export type CustomPageProps = PageProps & {
  pageContext: PageContext;
};

export type NewsPageProps = PageProps & {
  pageContext: PageContext & {
    posts: Array<Post>
  }
};
