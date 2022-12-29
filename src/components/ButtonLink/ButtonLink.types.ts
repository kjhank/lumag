import { GatsbyLinkProps } from 'gatsby';
import { HTMLAttributes, MouseEvent } from 'react';

export type ButtonLinkProps = HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & Omit<GatsbyLinkProps<{}>, 'ref' | 'to'> & {
  disabled?: boolean;
  hasArrow?: boolean;
  isButton?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
};
