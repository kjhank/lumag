import { PageProps } from 'gatsby';
import React from 'react';
import { PageContext } from '@/types';

export type LayoutProps = {
  children: React.ReactNode;
} & PageProps & { pageContext: PageContext };
