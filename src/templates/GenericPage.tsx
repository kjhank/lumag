import { Meta } from '@/features/Layout/components/Meta';
import { GenericPageRenderer } from '@/features/genericpage/GenericPageRenderer';
import { GenericPageProps } from '@/types';

const GenericPage = ({ pageContext }: GenericPageProps) => (
  <GenericPageRenderer
    content={pageContext.content.body} header={{
      background: pageContext.header.background,
      title: pageContext.metadata.title.rendered,
    }}
  />
);

export const Head = ({ pageContext } : GenericPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default GenericPage;
