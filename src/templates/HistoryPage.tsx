import { Header } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { TimelineSection } from '@/features/HistoryPage';
import { HistoryPageProps } from '@/types';

const HistoryPage = ({ pageContext: { content } }: HistoryPageProps) => (
  <>
    <Header {...content.header} paddingBlockStart={150} />
    <TimelineSection {...content.history} />
  </>
);

export const Head = ({ pageContext }: HistoryPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default HistoryPage;
