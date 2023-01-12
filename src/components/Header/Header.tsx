import { Container } from '@/components';
import { useOrphans } from '@/hooks';
import { CoverImage } from '../styled';
import { HeaderNode } from './Header.styled';
import { HeaderProps } from './Header.types';

export const Header = ({
  className,
  background, footerText, paddingBlockStart = 251,
  title, text, // TODO: add support for vertical backgrounds
}: HeaderProps) => {
  const parsedTitle = useOrphans(title);

  return (
    <HeaderNode className={className} paddingBlockStart={paddingBlockStart}>
      <CoverImage imageData={background} />
      <Container>
        {title && (
          <h2>
            {parsedTitle}
          </h2>
        )}
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
};
