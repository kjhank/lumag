import { GatsbyLinkProps } from 'gatsby';
import { HTMLAttributes } from 'react';

export type ButtonLinkProps = HTMLAttributes<HTMLAnchorElement> & Omit<GatsbyLinkProps<{}>, 'ref'> & { hasArrow?: boolean };
