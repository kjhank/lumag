import { Attributes, IOptions } from 'sanitize-html';
import {
  Container, Header, TextWithMedia,
} from '@/components';
import { Meta } from '@/features/Layout/components/Meta';
import { CareersPageProps } from '@/types';
import { Offers } from '@/features/CareersPage';
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

const CareersPage = ({ pageContext }: CareersPageProps) => (
  <>
    <Header {...pageContext.content.header} paddingInline={0} />
    <Container marginBlockEnd={138} marginBlockStart={-210}>
      <TextWithMedia
        {...pageContext.content.career} backgroundIndex={15}
        className="careers" contentElement="article"
        hasDecoration sanitizeConfig={iconSanitizeConfig}
      />
    </Container>
    <Offers
      background={pageContext.content.offersSectionBackground}
      heading={pageContext.content.offersHeading}
      offers={pageContext.content.jobOffers}
    />
  </>
);

export const Head = ({ pageContext }: CareersPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default CareersPage;
