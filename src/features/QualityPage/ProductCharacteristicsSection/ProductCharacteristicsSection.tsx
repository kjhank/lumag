import {
  Container, MiniCarousel, TextWithMedia,
} from '@/components';
import { Heading, Section } from './ProductCharacteristicsSection.styled';
import { ProductCharacteristicsSectionProps } from './ProductCharacteristicsSection.types';

export const ProductCharacteristicsSection = ({
  heading, rnd, miniCarousel,
}: ProductCharacteristicsSectionProps) => (
  <Section>
    <Container>
      <Heading>{heading}</Heading>
      <MiniCarousel className="carousel-characteristics" {...miniCarousel} />
      <TextWithMedia {...rnd} />
    </Container>
  </Section>
);
