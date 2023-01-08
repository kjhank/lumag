import { Certificates, TextWithImage } from '@/components';
import { Container, Header } from '@/features/OfferBrakesPage';
import { Catalogs } from '@/features/OfferBrakesPage/Catalogs/Catalogs';
import { OfferBrakesPageProps } from '@/types';

const OfferBreaksPage = ({ pageContext }: OfferBrakesPageProps) => (
  <>
    <Header {...pageContext.content.header} />
    <Container>
      <TextWithImage {...pageContext.content.brakePads} />
      <TextWithImage {...pageContext.content.brakeDiscs} />
      <TextWithImage {...pageContext.content.brakeLinings} />
    </Container>
    <Catalogs {...pageContext.content.catalogs} />
    <Certificates {...pageContext.content.certs} />
  </>
);

export default OfferBreaksPage;
