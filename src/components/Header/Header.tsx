import { Container } from '@/components';
import { useOrphans } from '@/hooks';
import { Background, HeaderNode } from './Header.styled';
import { HeaderProps } from './Header.types';

export const Header = ({
  className,
  background, footerText, title, text, // TODO: add support for vertical backgrounds
}: HeaderProps) => (
  <HeaderNode className={className}>
    <Background imageData={background} />
    <Container>
      <h2>
        {useOrphans(title)}
      </h2>
      {text && (
        <>
          <hr />
          <p>{text}</p>
        </>
      )}
      {footerText && <footer>{footerText}</footer>}
    </Container>
  </HeaderNode>
);
