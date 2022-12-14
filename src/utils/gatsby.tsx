import React from 'react';
import { Layout } from '@/components';
import { WrapPageElement, WrapPageProps } from './utils.types';

export const wrapPageElement: WrapPageElement = ({ element, props }: WrapPageProps) => (
  <Layout {...props}>
    {element}
  </Layout>
);
