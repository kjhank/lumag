import { Header } from '@/components';
import { NotFoundPageProps } from '@/types';

const NotFoundPage = ({ pageContext }: NotFoundPageProps) => (
  <Header {...pageContext.content.header} />
);

export default NotFoundPage;
