import { Certificates, TextWithMedia } from '@/components';
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

export default OfferBreaksPage;
