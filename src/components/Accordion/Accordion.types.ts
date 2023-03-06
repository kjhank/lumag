import { AccordionItem } from '@/types';

export type AccordionProps = {
  toggleCallback?: () => void;
  items: Array<AccordionItem>;
};
