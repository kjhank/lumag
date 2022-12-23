import { Container } from '@/components';
import { Background, HeaderNode } from '../GenericPageRenderer.styled';
import { HeaderProps } from '../GenericPageRenderer.types';

// TODO: h2 => h1 + header h1

export const Header = ({ background, title } : HeaderProps) => (
  <HeaderNode>
    <Background imageData={background} />
    <Container>
      <h2>{title}</h2>
    </Container>
  </HeaderNode>
);
