export type PaginatedListProps = {
  items: Array<React.ReactNode>;
  perPage?: number;
};

export type PageChange = number | 'next' | 'previous';
