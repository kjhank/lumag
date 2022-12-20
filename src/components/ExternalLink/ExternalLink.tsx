import { ExternalLinkProps } from './ExternalLink.types';

export const ExternalLink = ({ children, ...props }: ExternalLinkProps) => (
  <a
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);
