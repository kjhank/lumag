import { Certificates, TextWithMedia } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { Container, Header } from '@/features/OfferBrakesPage';
import { Catalogs } from '@/features/OfferBrakesPage/Catalogs/Catalogs';
import { OfferBrakesPageProps } from '@/types';

const OfferBreaksPage = ({ pageContext }: OfferBrakesPageProps) => (
  <>
    <Header {...pageContext.content.header} />
    <Container>
      <TextWithMedia {...pageContext.content.brakePads} />
      <TextWithMedia {...pageContext.content.brakeDiscs} />
      <TextWithMedia {...pageContext.content.brakeLinings} />
    </Container>
    <Catalogs {...pageContext.content.catalogs} />
    <Certificates {...pageContext.content.certs} />
  </>
);

export const Head = ({ pageContext }: OfferBrakesPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default OfferBreaksPage;
