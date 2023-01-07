import React from 'react';
import { HomePageProps } from '@/types';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Carousel, NewsPromos, Subsidies, Tiles, WhyUs,
} from '@/features/homepage';

const HomePage = ({ pageContext }: HomePageProps) => (
  <>
    <Carousel items={pageContext.content.carousel} />
    <Tiles items={pageContext.content.tiles} />
    <WhyUs data={pageContext.content.whyUs} />
    <NewsPromos
      news={pageContext.content.news}
      posts={pageContext.posts}
      promoAside={pageContext.content.promoAside}
    />
    <Subsidies {...pageContext.content.subsidies} />
  </>
);

export const Head = ({ pageContext }: HomePageProps) => (
  <Meta metadata={pageContext.metadata} />
);

export default HomePage;
