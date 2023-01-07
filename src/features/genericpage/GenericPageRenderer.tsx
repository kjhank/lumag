import {
  Container, Header, WYSIWYG,
} from '@/components';
import { Wrapper } from './GenericPageRenderer.styled';
import { GenericPageRendererProps } from './GenericPageRenderer.types';

export const GenericPageRenderer = ({ content, header }: GenericPageRendererProps) => (
  <>
    <Header {...header} />
    <Wrapper>
      <Container>
        <WYSIWYG as="main" html={content} />
      </Container>
    </Wrapper>
  </>
);
