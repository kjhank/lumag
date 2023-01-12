import { useAppContext } from '@/hooks';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Container } from '../Container/Container';
import { CoverImage, SectionHeading } from '../styled';
import {
  Heading,
  Item, Section, Subheading, Wrapper,
} from './SeeMore.styled';
import { RecommendationProps, SeeMoreProps } from './SeeMore.types';

const Recommendation = ({ item }: RecommendationProps) => {
  const { urlPrefix } = useAppContext();
  const url = `${urlPrefix}${item.url.post_name}`;

  return (
    <Item>
      <CoverImage imageData={item.background} />
      <Heading>{item.heading}</Heading>
      <Subheading>{item.text}</Subheading>
      <ButtonLink to={url}>{item.linkText}</ButtonLink>
    </Item>
  );
};

export const SeeMore = ({ heading, recommendations }: SeeMoreProps) => (
  <Section>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Wrapper>
        {recommendations.map(item => <Recommendation item={item} key={item.heading} />)}
      </Wrapper>
    </Container>
  </Section>
);
