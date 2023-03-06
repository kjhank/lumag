import { Attributes, IOptions } from 'sanitize-html';
import {
  Boxes,
  Container, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/features/Layout/components/Meta';
import { CareersPageProps } from '@/types';
import { BoxesSection, Careers } from '@/features/CareersPage';
import { sanitizeConfig } from '@/utils/globalConfigs';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import circleCheck from '-!url-loader!../static/icons/circle-check.raw.svg';

let liCtx: {
  attribs: Attributes;
  tagName: string;
} | undefined;

const iconSanitizeConfig: IOptions = {
  ...sanitizeConfig,
  textFilter(text) {
    if (!liCtx || liCtx.tagName !== 'li') return text;

    const newText = `<img alt="" class="raw-circle-check" src="${circleCheck}" /> ${text}`;

    liCtx = undefined;

    return newText;
  },
  transformTags: {
    // @ts-ignore
    li(tagName, attribs) {
      liCtx = {
        attribs,
        tagName,
      };

      return {
        tagName: 'li',
      };
    },
  },
};

const CareersPage = ({ pageContext: { content } }: CareersPageProps) => (
  <>
    <Header {...content.header} paddingInline={0} />
    <Container marginBlockEnd={138} marginBlockStart={-210}>
      <TextWithMedia
        {...content.career} backgroundIndex={15}
        className="careers" contentElement="article"
        hasDecoration sanitizeConfig={iconSanitizeConfig}
      />
    </Container>
    <Careers
      background={content.offersSectionBackground}
      form={content.form}
      formFields={content.contactForm}
      formHeading={content.formHeading}
      formMessage={content.formMessage}
      heading={content.offersHeading}
      offers={content.jobOffers}
    />
    <BoxesSection>
      <Container>
        <Boxes items={content.boxes} />
      </Container>
    </BoxesSection>
  </>
);

export const Head = ({ pageContext }: CareersPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default CareersPage;
