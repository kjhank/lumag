import { HistoryEvent } from '@/types';

export type TimelineProps = {
  list: Array<HistoryEvent>;
};

export type EventProps = { event: HistoryEvent };
