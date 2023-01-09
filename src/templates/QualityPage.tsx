import { Certificates, TextWithImage } from '@/components';
import { Container, Header } from '@/features/QualityPage';
import { ProductCharacteristicsSection } from '@/features/QualityPage/ProductCharacteristicsSection/ProductCharacteristicsSection';
import { QualityPageProps } from '@/types';

const QualityPage = ({ pageContext }: QualityPageProps) => (
  <>
    <Header {...pageContext.content.header} />
    <Container>
      <TextWithImage {...pageContext.content.textWithImage} />
    </Container>
    <Certificates {...pageContext.content.certs} />
    <ProductCharacteristicsSection
      heading={pageContext.content.characteristicsHeading}
      miniCarousel={pageContext.content.miniCarousel}
      rnd={pageContext.content.rnd}
    />
  </>
);

export default QualityPage;
