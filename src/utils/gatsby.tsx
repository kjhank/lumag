import React from 'react';
import { Layout } from '@/components';
import { WrapPageElement } from './utils.types';

export const wrapPageElement: WrapPageElement = ({ element, props }: any) => (
  // TODO: not sure how to type this, might have to stay with `any` for some time
  <Layout {...props}>
    {element}
  </Layout>
);
