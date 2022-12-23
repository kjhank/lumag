import { Container, WYSIWYG } from '@/components';
import { Header } from './components/Header';
import { GenericPageRendererProps } from './GenericPageRenderer.types';

export const GenericPageRenderer = ({ content, header }: GenericPageRendererProps) => (
  <>
    <Header {...header} />
    <Container>
      <WYSIWYG html={content} />
    </Container>
  </>
);
