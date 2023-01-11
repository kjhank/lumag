import { useState } from 'react';
import sanitize from 'sanitize-html';
import { Container } from '@/components';
import {
  ActionButton,
  Background, Dots, Heading, Item, List, Section, Text,
} from './Carousel.styled';
import { CarouselProps } from './Carousel.types';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';

export const Carousel = ({ items }: CarouselProps) => {
  const [activeId, setActiveId] = useState(0);

  const handleActive = (index: number) => setActiveId(index);

  return (
    <Section>
      <List>
        {items.map((item, index) => (
          <Item isActive={index === activeId} key={item.heading}>
            <Container>
              <Heading dangerouslySetInnerHTML={{ __html: sanitize(item.heading, { allowedTags: ['br'] }) }} />
              <Text>{item.subheading}</Text>
              <ButtonLink to="/aktualnosci">Czytaj więcej</ButtonLink>
            </Container>
            <Background imageData={item.image} />
          </Item>
        ))}
      </List>
      <Dots>
        {items.map((item, index) => (
          <ActionButton
            isActive={index === activeId}
            key={item.heading} onClick={() => handleActive(index)}
          >
            <span className="visually-hidden">
              go to item
              {' '}
              {index + 1}
            </span>
          </ActionButton>
        ))}
      </Dots>
    </Section>
  );
};
