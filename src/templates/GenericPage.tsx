import { GenericPageRenderer } from '@/features/genericpage/GenericPageRenderer';
import { GenericPageProps } from '@/types';

const GenericPage = ({ pageContext }: GenericPageProps) => (
  <GenericPageRenderer
    content={pageContext.content.rendered} header={{
      background: pageContext.header.background,
      title: pageContext.metadata.title.rendered,
    }}
  />
);

export default GenericPage;
