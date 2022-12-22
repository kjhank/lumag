import React from 'react';
import { HomePageProps } from '@/types';
import { Meta } from '@/components/Layout/Meta';
import { Carousel } from '@/features/homepage/Carousel/Carousel';
import { Tiles } from '@/features/homepage/Tiles/Tiles';
import { WhyUs } from '@/features/homepage/WhyUs/WhyUs';
import { NewsPromos } from '@/features/homepage/NewsPromos/NewsPromos';
import { Subsidies } from '@/features/homepage/Subsidies/Subsidies';

const HomePage = (
  {
    pageContext,
  }: HomePageProps
) => (
  <>
    <Carousel items={pageContext.content.carousel} />
    <Tiles items={pageContext.content.tiles} />
    <WhyUs data={pageContext.content.whyUs} />
    <NewsPromos
      news={pageContext.content.news} posts={pageContext.posts}
      promoAside={pageContext.content.promoAside}
    />
    <Subsidies {...pageContext.content.subsidies} />
  </>
);

export const Head = ({ pageContext } : HomePageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default HomePage;
