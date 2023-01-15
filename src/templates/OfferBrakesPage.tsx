import {
  Certificates, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { Container } from '@/features/OfferBrakesPage';
import { Catalogs } from '@/features/OfferBrakesPage/Catalogs/Catalogs';
import { OfferBrakesPageProps } from '@/types';

const OfferBreaksPage = ({ pageContext }: OfferBrakesPageProps) => (
  <>
    <Header {...pageContext.content.header} paddingInline="2%" />
    <Container>
      <TextWithMedia {...pageContext.content.brakePads} backgroundIndex={5} />
      <TextWithMedia {...pageContext.content.brakeDiscs} backgroundIndex={5} />
      <TextWithMedia
        {...pageContext.content.brakeLinings} backgroundIndex={5}
        hasDecoration
      />
    </Container>
    <Catalogs {...pageContext.content.catalogs} />
    <Certificates {...pageContext.content.certs} />
  </>
);

export const Head = ({ pageContext }: OfferBrakesPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default OfferBreaksPage;
