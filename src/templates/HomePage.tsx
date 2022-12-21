import React from 'react';
import { HomePageProps } from '@/types';
import { Meta } from '@/components/Layout/Meta';
import { Carousel } from '@/features/homepage/Carousel/Carousel';
import { Tiles } from '@/features/homepage/Tiles/Tiles';

const HomePage = (
  {
    pageContext,
  }: HomePageProps
) => (
  <>
    <Carousel items={pageContext.content.carousel} />
    <Tiles items={pageContext.content.tiles} />
  </>
);

export const Head = ({ pageContext } : HomePageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default HomePage;
