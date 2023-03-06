import { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks';
import { AccordionProps } from './Accordion.types';
import {
  Content,
  Item,
  List, Toggle, Wrapper,
} from './Accordion.styled';
import { ArrowRight } from '@/static';

export const Accordion = ({ items, toggleCallback = () => { } }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRef = useRef<HTMLUListElement>(null);

  const toggle = (id: null | number) => {
    setOpenIndex(id === openIndex ? null : id);
    toggleCallback();
  };

  useOutsideClick(itemRef, () => toggle(null));

  return (
    <Wrapper>
      <List ref={itemRef}>
        {items.map((item, index) => (
          <Item isExpanded={index === openIndex} key={item.key}>
            <Toggle
              aria-controls={`accordion-panel-${index}`}
              aria-expanded={index === openIndex}
              id={`accordion-id-${index}`}
              onClick={() => toggle(index)}
            >
              {item.heading}
              <ArrowRight />
            </Toggle>
            <Content
              aria-labelledby={`accordion-id-${index}`}
              id={`accordion-panel-${index}`}
              role="region"
            >
              {item.content}
            </Content>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
