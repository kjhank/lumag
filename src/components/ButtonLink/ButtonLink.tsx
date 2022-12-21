import { ButtonLinkProps } from './ButtonLink.types';
import { LinkNode } from './ButtonLink.styled';
import { ArrowRight } from '@/static';

export const ButtonLink = ({
  children, className, hasArrow = true, style, to, ...props
} : ButtonLinkProps) => (
  <LinkNode
    className={className} style={style}
    to={to}
    {...props}
  >
    {children}
    {hasArrow && <ArrowRight />}
  </LinkNode>
);
