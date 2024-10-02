import {
  Container, Header,
} from '@/components';
import { Meta } from '@/features/Layout/components/Meta';
import { Form } from '@/features/WhistleblowersPage/Form/Form';
import { Intro } from '@/features/WhistleblowersPage/Intro/Intro';
import { WhistleblowerPageProps } from '@/types';

const WhistleblowersPage = ({ pageContext: { content } }: WhistleblowerPageProps) => (
  <>
    <Header {...content.header} paddingInline={0} />
    <Container marginBlockEnd={138} marginBlockStart={128}>
      <Intro {...content.intro} />
      <Form
        declarations={{
          heading: content.form?.declarations_heading,
          items: content.form?.declarations ?? [],
        }}
        footnotes={content.form.footnotes} form={content.form.form_object}
        mappings={content.form.field_mapping}
        maxFileSizeConfig={{
          message: content.form.max_file_size_exceeded,
          size: content.form.max_files_size,
        }}
        submitText={content.form.submit_text}
        submitTextFetching={content.form.submit_text_fetching}
      />
    </Container>
  </>
);

export const Head = ({ pageContext }: WhistleblowerPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default WhistleblowersPage;
