import styled from 'styled-components';
import { WPImage } from '@/components';

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;
`;

export const HeaderNode = styled.header`
  position: relative;
  aspect-ratio: 1920/716;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-block-start: ${({ theme }) => theme.helpers.getMin(251)};
  font-weight: 900;
  ${({ theme }) => theme.fonts.sizes.xxl};
  text-align: center;
  text-transform: uppercase;

  h2 {
    padding-inline: 25%;
    color: ${({ theme }) => theme.colors.brand};
  }
`;
