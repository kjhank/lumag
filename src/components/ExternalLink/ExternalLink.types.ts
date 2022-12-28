import React from 'react';

export type ExternalLinkProps = {
  children: React.ReactNode;
  href: string;
  rel?: string;
  target?: React.HTMLAttributeAnchorTarget;
} & React.HTMLAttributes<HTMLAnchorElement>;
