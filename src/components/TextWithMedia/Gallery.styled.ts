import styled from 'styled-components';
import { WPImage } from '@/components';

export const CurrentImage = styled(WPImage)``;

export const ImageGrid = styled.div<{ columnsCount: number }>`
  display: grid;
  grid-template: ${({ columnsCount }) => `auto / repeat(${columnsCount}, 1fr)`};
  gap: inherit;
`;

export const ImageTrigger = styled.button.attrs({ type: 'button' })`
  overflow: hidden;
  cursor: pointer;

  img {
    transition: scale ${({ theme }) => theme.transitions.fast};
  }

  :hover {
    > picture {
      > img {
        scale: 1.05;
      }
    }
  }
`;
