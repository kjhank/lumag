import { useRef, useState } from 'react';
import { Zoom } from '@/static';
import {
  ActionButton,
  Description,
  EventNode, Header, Name, Title, Year,
} from './Timeline.styled';
import { EventProps } from './Timeline.types';
import { useOutsideClick } from '@/hooks';

export const TimelineEvent = ({ event }: EventProps) => {
  const [isImageOpen, setImageOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = () => {
    console.log('click');
    setImageOpen(current => !current);
  };

  useOutsideClick(buttonRef, () => setImageOpen(false));

  return (
    <EventNode>
      <Header>
        <Name>
          <Year>
            {event.year}
          </Year>
          <Title>{event.title}</Title>
        </Name>
        <ActionButton onClick={handleButtonClick} ref={buttonRef}>
          <Zoom />
        </ActionButton>
      </Header>
      <Description>{event.description}</Description>
      {isImageOpen && 'boo'}
    </EventNode>
  );
};
