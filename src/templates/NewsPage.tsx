import { Meta } from '@/components/Layout/components/Meta';
import { CustomPageProps } from '@/types';

const NewsPage = () => (<h1>news</h1>);

export const Head = ({ pageContext } : CustomPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default NewsPage;
