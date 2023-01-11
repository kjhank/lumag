import {
  Container, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { Code, Goals } from '@/features/ValuesPage';
import { ValuesPageProps } from '@/types';

const ValuesPage = ({ pageContext: { content } }: ValuesPageProps) => (
  <>
    <Header {...content.header} />
    <Container>
      {content.list.map(item => <TextWithMedia key={item.heading} {...item} />)}
    </Container>
    <Goals {...content.goals} />
    <Code {...content.code} />
  </>
);

export const Head = ({ pageContext }: ValuesPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default ValuesPage;
