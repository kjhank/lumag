import { useRef, useState } from 'react';
import { Zoom } from '@/static';
import {
  ActionButton,
  Description,
  EventImage,
  EventNode, Header, Name, Title, Year,
} from './Timeline.styled';
import { EventProps } from './Timeline.types';
import { Modal } from '../Modal/Modal';

export const TimelineEvent = ({ event }: EventProps) => {
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOpen(true);
  };

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
      <Modal
        aspectRatio={event.image.width / event.image.height} isOpen={isOpen}
        onCloseCallback={() => setOpen(false)}
      >
        <EventImage imageData={event.image} />
      </Modal>
    </EventNode>
  );
};
