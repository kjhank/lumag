import sanitize from 'sanitize-html';
import { formatDate, getIcon } from '@/utils';
import {
  DateElem, Excerpt, Heading, NewsLink, NewsNode,
} from './NewsPromos.styled';
import { NewsItemProps } from './NewsPromos.types';

const Clock = getIcon('clockIcon');
const ArrowRight = getIcon('arrowRight');

export const NewsItem = ({
  linkLabel, post, targetPost,
}: NewsItemProps) => {
  const trimmedText = sanitize(`${post.content.rendered.split(' ').slice(0, 40)
    .join(' ')}`, { allowedTags: ['br'] });
  const formattedDate = formatDate(new Date(post.date));
  const showEllipsis = trimmedText.length >= 40;

  return (
    <NewsNode key={post.slug}>
      <Heading>{post?.title?.rendered}</Heading>
      <DateElem>
        <Clock />
        <time dateTime={formattedDate}>{formattedDate}</time>
      </DateElem>
      <Excerpt dangerouslySetInnerHTML={{ __html: showEllipsis ? `${trimmedText} [...]` : trimmedText }} />
      <NewsLink to={`${targetPost.post_name}#${post.slug}`}>
        {linkLabel}
        <ArrowRight />
      </NewsLink>
    </NewsNode>
  );
};
