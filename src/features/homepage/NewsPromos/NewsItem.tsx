import sanitize from 'sanitize-html';
import { formatDate, getIcon } from '@/utils';
import {
  DateElem, Excerpt, Heading, NewsLink, NewsNode,
} from './NewsPromos.styled';
import { NewsItemProps } from './NewsPromos.types';

const Clock = getIcon('clockIcon');
const ArrowRight = getIcon('arrowRight');

export const NewsItem = ({ linkLabel, post }: NewsItemProps) => (

  <NewsNode key={post.slug}>
    <Heading>{post.title.rendered}</Heading>
    <DateElem>
      <Clock />
      <time dateTime={post.date}>{formatDate(new Date(post.date))}</time>
    </DateElem>
    <Excerpt>{sanitize(post.excerpt.rendered, { allowedTags: [] })}</Excerpt>
    <NewsLink to={post.slug}>
      {linkLabel}
      <ArrowRight />
    </NewsLink>
  </NewsNode>
);
