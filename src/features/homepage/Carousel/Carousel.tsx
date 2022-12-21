import { Container } from '@/components';
import {
  Background, Heading, Item, List, Section, Text,
} from './Carousel.styled';
import { CarouselProps } from './Carousel.types';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';

export const Carousel = ({ items }: CarouselProps) => (
  <Section>
    <List>
      {items.map(item => (
        <Item isActive key={item.heading}>
          <Container>
            <Heading>{item.heading}</Heading>
            <Text>{item.subheading}</Text>
            <ButtonLink to="/aktualnosci">Czytaj więcej</ButtonLink>
          </Container>
          <Background imageData={item.image} />
        </Item>
      ))}
    </List>
  </Section>
);
