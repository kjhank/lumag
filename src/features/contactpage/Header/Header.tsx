import { Container } from '@/components';
import { Background, HeaderNode } from './Header.styled';
import { HeaderProps } from './Header.types';

export const Header = ({ background, title } : HeaderProps) => (
  <HeaderNode>
    <Background imageData={background} />
    <Container>
      <h2>{title}</h2>
    </Container>
  </HeaderNode>
);
