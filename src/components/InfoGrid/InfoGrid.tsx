import { Grid, Item } from './InfoGrid.styled';
import { InfoGridProps } from './InfoGrid.types';

export const InfoGrid = ({ items }: InfoGridProps) => (
  <Grid>
    {items.map(item => <Item key={item}>{item}</Item>)}
  </Grid>
);
