import { useState } from 'react';
import sanitize from 'sanitize-html';
import { Container } from '@/components';
import {
  ActionButton,
  Background, Dots, Heading, Item, List, Section, Text,
} from './Carousel.styled';
import { CarouselItemProps, CarouselProps } from './Carousel.types';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { useApiLinks } from '@/hooks';

const CarouselItem = ({ isActive, item }: CarouselItemProps) => {
  const parsedUrl = useApiLinks(item.link.url.url);

  return (
    <Item isActive={isActive} key={item.heading}>
      <Container>
        <Heading dangerouslySetInnerHTML={{ __html: sanitize(item.heading, { allowedTags: ['br'] }) }} />
        <Text>{item.subheading}</Text>
        <ButtonLink to={parsedUrl}>{item.link.label}</ButtonLink>
      </Container>
      <Background imageData={item.image} />
    </Item>
  );
};

export const Carousel = ({ items }: CarouselProps) => {
  const [activeId, setActiveId] = useState(0);

  const handleActive = (index: number) => setActiveId(index);

  return (
    <Section>
      <List>
        {items.map((item, index) => (
          <CarouselItem
            isActive={index === activeId} item={item}
            key={item.heading}
          />
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
