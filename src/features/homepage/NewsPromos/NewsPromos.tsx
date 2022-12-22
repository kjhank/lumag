import { NewsPromosProps } from './NewsPromos.types';

import {
  Image, News, NewsHeading, NewsList, Promos, PromoText, Section, SinglePromo,
} from './NewsPromos.styled';
import { ButtonLink, Container } from '@/components';

import { NewsItem } from './NewsItem';

export const NewsPromos = ({
  news, posts, promoAside,
}: NewsPromosProps) => (
  <Section>
    <Container>
      <NewsHeading>{news.heading}</NewsHeading>
      <News>
        <NewsList>
          {posts.map(post => (
            <NewsItem
              key={post.title.rendered} linkLabel={news.linkLabel}
              post={post}
            />
          ))}
        </NewsList>
        <ButtonLink to="/aktualnosci">{news.newsLinkLabel}</ButtonLink>
      </News>
      <Promos>
        {promoAside.map(promo => (
          <SinglePromo key={promo.text}>
            <Image imageData={promo.image} />
            <PromoText>
              {promo.text}
            </PromoText>
            <ButtonLink to={promo.link.url.url}>{promo.link.Label}</ButtonLink>
          </SinglePromo>
        ))}
      </Promos>
    </Container>
  </Section>
);
