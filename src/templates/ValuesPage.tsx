import {
  Container, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { Code, Goals } from '@/features/ValuesPage';
import { ValuesPageProps } from '@/types';

const ValuesPage = ({ pageContext: { content } }: ValuesPageProps) => (
  <>
    <Header {...content.header} />
    <Container marginBlockEnd={-100} marginBlockStart={-200}>
      {content.list.map(item => (
        <TextWithMedia
          backgroundIndex={5}
          fontSize={20} key={item.heading}
          layout="alternating-reverse"
          {...item}
        />
      ))}
    </Container>
    <Goals {...content.goals} />
    <Code {...content.code} />
  </>
);

export const Head = ({ pageContext }: ValuesPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default ValuesPage;
