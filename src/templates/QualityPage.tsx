import { Certificates, TextWithMedia } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Container, Header, PartnersSection, ProductCharacteristicsSection,
} from '@/features/QualityPage';
import { QualityPageProps } from '@/types';

const QualityPage = ({ pageContext }: QualityPageProps) => (
  <>
    <Header {...pageContext.content.header} paddingBlockStart={180} />
    <Container>
      <TextWithMedia {...pageContext.content.textWithImage} />
    </Container>
    <Certificates {...pageContext.content.certs} />
    <ProductCharacteristicsSection
      heading={pageContext.content.characteristicsHeading}
      miniCarousel={pageContext.content.miniCarousel}
      rnd={pageContext.content.rnd}
    />
    <PartnersSection {...pageContext.content.partners} />
  </>
);

export const Head = ({ pageContext }: QualityPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default QualityPage;
