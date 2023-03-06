import {
  Box, BoxContent, BoxesList, BoxHeading,
} from './Boxes.styled';
import { BoxesProps } from './Boxes.types';

export const Boxes = ({ items }: BoxesProps) => (
  <BoxesList>
    {items.map(box => (
      <Box key={box.heading}>
        <BoxHeading>{box.heading}</BoxHeading>
        <BoxContent>{box.content}</BoxContent>
      </Box>
    ))}
  </BoxesList>
);
