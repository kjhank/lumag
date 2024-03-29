import { Header } from '@/components';
import { Meta } from '@/features/Layout/components/Meta';
import { TimelineSection } from '@/features/HistoryPage';
import { HistoryPageProps } from '@/types';

const HistoryPage = ({ pageContext: { content } }: HistoryPageProps) => (
  <>
    <Header
      {...content.header} paddingBlockStart={90}
      paddingInline={0}
    />
    <TimelineSection {...content.history} />
  </>
);

export const Head = ({ pageContext }: HistoryPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default HistoryPage;
