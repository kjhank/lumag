import {
  Container, Header, QuoteHero,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { GetToKnowUs, WhyDifferent } from '@/features/AboutPage';
import { AboutPageProps } from '@/types';

const AboutPage = ({ pageContext: { content } }: AboutPageProps) => (
  <>
    <Header {...content.header} />
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
