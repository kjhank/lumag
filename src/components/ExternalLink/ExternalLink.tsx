import { ExternalLinkProps } from './ExternalLink.types';

export const ExternalLink = ({
  children, href = '/', rel = 'noreferrer', target = '_blank', ...props
}: ExternalLinkProps) => (
  <a
    href={href}
    rel={rel}
    target={target}
    {...props}
  >
    {children}
  </a>
);
