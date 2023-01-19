import { Meta } from '@/components/Layout/components/Meta';
import { ContactForm } from '@/features/contactpage';
import { Header } from '@/components';
import { KeepInTouch } from '@/features/contactpage/KeepInTouch/KeepInTouch';
import { Reps } from '@/features/contactpage/Reps/Reps';
import { Tiles } from '@/features/contactpage/Tiles/Tiles';
import { ContactPageProps } from '@/types';

const ContactPage = ({ pageContext: { content } }: ContactPageProps) => (
  <>
    <Header {...content.header} paddingBlockStart={120} />
    <KeepInTouch contactData={content.contactData} />
    <Reps
      background={content.repsBackground}
      heading={content.repsHeading}
      reps={content.reps}
    />
    <Tiles
      downloads={content.tiles.downloads}
      media={content.tiles.media}
      suppliers={content.tiles.suppliers}
    />
    <ContactForm {...content.contactForm} />
  </>
);

export const Head = ({ pageContext }: ContactPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default ContactPage;
