import { Header } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { MethodsSection, Tools } from '@/features/ManagementPage';
import { ManagingPageProps } from '@/types';

const ManagingPage = ({ pageContext: { content } }: ManagingPageProps) => (
  <>
    <Header {...content.header} />
    <MethodsSection items={content.list} />
    <Tools {...content.tools} />
  </>
);

export const Head = ({ pageContext }: ManagingPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default ManagingPage;
