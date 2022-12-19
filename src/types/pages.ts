import { PageProps } from 'gatsby';
import { Post } from './wordpress';

export type NewsPageProps = PageProps & {
  pageContext: {
    posts: Array<Post>
  }
};
