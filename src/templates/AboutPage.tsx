import { Header } from '@/components';
import { GetToKnowUs, WhyDifferent } from '@/features/AboutPage';
import { AboutPageProps } from '@/types';

const AboutPage = ({ pageContext: { content } }: AboutPageProps) => (
  <>
    <Header {...content.header} />
    <WhyDifferent {...content.whyDifferent} />
    <GetToKnowUs {...content.getToKnowUs} />
  </>
);

export default AboutPage;
