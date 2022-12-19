import React from 'react';
import { PageProps } from 'gatsby';

export const Head = () => <title>I am a title</title>;

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
  </>
);

export default HomePage;
