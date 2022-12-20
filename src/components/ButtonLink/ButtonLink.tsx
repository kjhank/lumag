import { ButtonLinkProps } from './ButtonLink.types';
import { LinkNode } from './ButtonLink.styled';

export const ButtonLink = ({
  children, className, style, to, ...props
} : ButtonLinkProps) => (
  <LinkNode
    className={className} style={style}
    to={to}
    {...props}
  >
    {children}
  </LinkNode>
);
