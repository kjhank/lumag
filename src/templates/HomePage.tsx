import React from 'react';
import { Link, PageProps } from 'gatsby';
import { CustomPageProps } from '@/types';
import { Meta } from '@/components/Layout/Meta';

const HomePage = (
  {
    children, location,
  }: PageProps
) => (
  <>
    host:
    {' '}
    {location.host}
    {children}
    <Link to="/aktualnosci/">news</Link>
  </>
);

export const Head = ({ pageContext } : CustomPageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default HomePage;
