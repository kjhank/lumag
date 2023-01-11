import { List } from './Timeline.styled';
import { TimelineProps } from './Timeline.types';
import { TimelineEvent } from './TimelineEvent';

export const Timeline = ({ list }: TimelineProps) => (
  <List>
    {list.map(event => <TimelineEvent event={event} key={event.year} />)}
  </List>
);
