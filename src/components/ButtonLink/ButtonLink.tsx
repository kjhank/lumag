import { ButtonLinkProps } from './ButtonLink.types';
import { Anchor, GatsbyLink } from './ButtonLink.styled';
import { ArrowRight } from '@/static';

export const ButtonLink = ({
  children, className, hasArrow = true, style, to, ...props
} : ButtonLinkProps) => {
  const isExternal = to.startsWith('http');

  if (isExternal) {
    return (
      <Anchor href={to} {...props}>
        {children}
        {hasArrow && <ArrowRight />}
      </Anchor>
    );
  }

  return (
    <GatsbyLink
      className={className} style={style}
      to={to}
      {...props}
    >
      {children}
      {hasArrow && <ArrowRight />}
    </GatsbyLink>
  );
};
