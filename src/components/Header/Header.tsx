import { Container } from '@/components';
import { Background, HeaderNode } from './Header.styled';
import { HeaderProps } from './Header.types';

export const Header = ({
  className,
  background, title, text, // TODO: add support for vertical backgrounds
} : HeaderProps) => (
  <HeaderNode className={className}>
    <Background imageData={background} />
    <Container>
      <h2>{title}</h2>
      {text && (
      <>
        <hr />
        <p>{text}</p>
      </>
      )}
    </Container>
  </HeaderNode>
);
