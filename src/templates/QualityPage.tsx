import {
  Certificates, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/features/Layout/components/Meta';
import {
  Container, PartnersSection, ProductCharacteristicsSection,
} from '@/features/QualityPage';
import { QualityPageProps } from '@/types';

const QualityPage = ({ pageContext }: QualityPageProps) => (
  <>
    <Header {...pageContext.content.header} paddingInline={0} />
    <Container>
      <TextWithMedia {...pageContext.content.textWithImage} hasExtraPadding />
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
