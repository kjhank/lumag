import {
  Certificates, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Container, CoopSection, InnovationSection, PlatesLeaderSection,
} from '@/features/IPSPage';
import { IPSPageProps } from '@/types';

const IPSPage = ({ pageContext }: IPSPageProps) => (
  <>
    <Header {...pageContext.content.header} paddingBlockStart={210} />
    <Container>
      <TextWithMedia
        {...pageContext.content.textWithVideo} backgroundIndex={5}
        hasDecoration
        layout="imageRight"
      />
    </Container>
    <InnovationSection
      {...pageContext.content.iconsEtc}
      miniCarousel={pageContext.content.innovativeTech}
    />
    <PlatesLeaderSection
      carryPlate={pageContext.content.carryPlate}
      europeanLeader={pageContext.content.europeanLeader}
    />
    <CoopSection {...pageContext.content.coop} />
    <Certificates {...pageContext.content.certs} />
  </>
);

export const Head = ({ pageContext }: IPSPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default IPSPage;
