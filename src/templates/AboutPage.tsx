import {
  Container, Header, QuoteHero,
} from '@/components';
import { Meta } from '@/features/Layout/components/Meta';
import { GetToKnowUs, WhyDifferent } from '@/features/AboutPage';
import { AboutPageProps } from '@/types';

const AboutPage = ({ pageContext: { content } }: AboutPageProps) => (
  <>
    <Header
      {...content.header}
      paddingBlockStart={70}
      paddingInline={0}
    />
    <Container>
      <QuoteHero {...content.person} />
    </Container>
    <WhyDifferent {...content.whyDifferent} />
    <GetToKnowUs {...content.getToKnowUs} layout="alternating" />
  </>
);

export const Head = ({ pageContext }: AboutPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default AboutPage;
