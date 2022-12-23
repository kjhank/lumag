import styled from 'styled-components';
import { WPImage } from '@/components';

export const Wrapper = styled.article`
  margin-top: ${({ theme }) => theme.helpers.getMin(80)};
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;
`;

export const HeaderNode = styled.header`
  position: relative;
  aspect-ratio: 1920/716;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fonts.sizes.xxl};
  text-align: center;
  text-transform: uppercase;

  h2 {
    padding-inline: 25%;
    color: ${({ theme }) => theme.colors.brand};
  }
`;
