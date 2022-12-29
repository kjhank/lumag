import { Meta } from '@/components/Layout/components/Meta';
import { ContactForm, Header } from '@/features/contactpage';
import { KeepInTouch } from '@/features/contactpage/KeepInTouch/KeepInTouch';
import { Reps } from '@/features/contactpage/Reps/Reps';
import { Tiles } from '@/features/contactpage/Tiles/Tiles';
import { ContactPageProps } from '@/types';

const ContactPage = ({ pageContext: { content } }: ContactPageProps) => (
  <>
    <Header
      background={content.header.background}
      title={content.header.title}
    />
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
    <ContactForm
      fields={content.contactForm.fields}
      footer={content.contactForm.footer}
      heading={content.contactForm.heading}
      legal={content.contactForm.legal}
      subheading={content.contactForm.subheading}
      subjectOptions={content.contactForm.subjectOptions}
      submitText={content.contactForm.submitText}
      text={content.contactForm.text}
    />
  </>
);

export const Head = ({ pageContext }: ContactPageProps) => (
  <Meta metadata={pageContext.metadata} />
);
export default ContactPage;
