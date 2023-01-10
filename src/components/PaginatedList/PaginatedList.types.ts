export type PaginatedListProps = {
  className?: string;
  items: Array<React.ReactNode>;
  perPage?: number;
};

export type PageChange = number | 'next' | 'previous';
