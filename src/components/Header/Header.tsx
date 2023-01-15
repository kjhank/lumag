import { Container } from '@/components';
import { useOrphans } from '@/hooks';
import { CoverImage } from '../styled';
import { HeaderNode, Text } from './Header.styled';
import { HeaderProps } from './Header.types';

const DEFAULT_PADDING_START = 80;
const DEFAULT_PADDING_END = 110;
const DEFAULT_PADDING_INLINE = '10%';

export const Header = ({
  className, background, footerText,
  paddingBlockStart, paddingBlockEnd, paddingInline, title, text,
}: HeaderProps) => {
  const parsedTitle = useOrphans(title);

  return (
    <HeaderNode
      className={className}
      justifyContent={paddingBlockStart ? 'flex-start' : 'center'}
      paddingBlockEnd={paddingBlockEnd ?? DEFAULT_PADDING_END}
      paddingBlockStart={paddingBlockStart
        ? paddingBlockStart + DEFAULT_PADDING_START
        : DEFAULT_PADDING_START}
      paddingInline={paddingInline ?? DEFAULT_PADDING_INLINE}
    >
      <CoverImage imageData={background} />
      <Container>
        {title && (
          <h2>
            {parsedTitle}
          </h2>
        )}
        {text && (
          <Text>
            <hr />
            <p>{text}</p>
            {footerText && <span>{footerText}</span>}
          </Text>
        )}
      </Container>
    </HeaderNode>
  );
};
