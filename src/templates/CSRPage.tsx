import {
  ExpandableItem,
  Header, PaginatedList,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { CSRPageProps } from '@/types';

const CSRPage = ({ pageContext: { content } }: CSRPageProps) => (
  <>
    <Header {...content.header} />
    <PaginatedList
      items={content.list.map(item => (
        <ExpandableItem
          buttons={content.buttons}
          image={item.image}
          key={item.title}
          text={item.content}
          title={item.title}
        />
      ))}
      perPage={4}
    />
  </>
);

export const Head = ({ pageContext }: CSRPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default CSRPage;
