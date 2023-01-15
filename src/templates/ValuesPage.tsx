import {
  Container, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { Code, Goals } from '@/features/ValuesPage';
import { ValuesPageProps } from '@/types';

const ValuesPage = ({ pageContext: { content } }: ValuesPageProps) => (
  <>
    <Header
      {...content.header} paddingBlockStart={60}
      paddingInline="4%"
    />
    <Container marginBlockEnd={-100} marginBlockStart={-200}>
      {content.list.map((item, index) => (
        <TextWithMedia
          backgroundIndex={5}
          fontSize={20} hasDecoration={index === content.list.length - 1}
          key={item.heading}
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
