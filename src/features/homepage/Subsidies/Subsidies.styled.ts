import styled, { css } from 'styled-components';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  padding-block-end: ${({ theme }) => theme.helpers.getMin(81)};
`;

export const ImageGrid = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(65)};
  padding-block: ${({ theme }) => theme.helpers.getMin(31)};
  padding-inline: ${({ theme }) => theme.helpers.getMin(21)};
  border-block-end: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.neutral[25]}`};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      display: grid;
      grid-template-columns: 1fr;
      padding: 20%;
    }
  `}
`;

export const ImageElem = styled.li``;

export const Image = styled(WPImage)`
  max-height: ${({ theme }) => theme.helpers.getMin(105)};
`;

export const Text = styled.p`
  margin-block-start: ${({ theme }) => theme.helpers.getMin(18)};
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(16)};
  text-align: center;
`;
