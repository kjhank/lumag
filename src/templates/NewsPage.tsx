import { Meta } from '../components/Layout/components/Meta';
import { NewsPageProps } from '@/types';
import { Header, PaginatedList } from '../components';
import { ExpandableItem } from '@/components/ExpandableItem/ExpandableItem';
import { NewsDate } from '@/components/styled';
import { formatDate } from '@/utils';
import { ClockIcon } from '@/static';
import { useAppContext } from '@/hooks';

const NewsPage = ({ pageContext }: NewsPageProps) => {
  const { defaultNewsThumbnail } = useAppContext();

  return (
    <>
      <Header className="header--news-page" {...pageContext.header} />
      <PaginatedList
        items={pageContext.posts.map(post => {
          if (Object.keys(post).length < 1) return null;
          const formattedDate = formatDate(new Date(post.date));

          return (
            <ExpandableItem
              buttons={pageContext.content.buttons} className="newsPage"
              image={post.image || defaultNewsThumbnail} key={post.title}
              text={post.text} title={post.title}
            >
              <NewsDate dateTime={formattedDate}>
                <ClockIcon />
                {formattedDate}
              </NewsDate>
            </ExpandableItem>
          );
        })}
        perPage={Number(pageContext.content.perpage)}
      />
    </>
  );
};

export const Head = ({ pageContext }: NewsPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default NewsPage;
