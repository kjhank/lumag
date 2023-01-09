import {
  Container, MiniCarousel, TextWithImage,
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
      <TextWithImage {...rnd} />
    </Container>
  </Section>
);
