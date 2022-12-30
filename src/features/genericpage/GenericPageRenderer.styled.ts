import styled, { css } from 'styled-components';
import { WPImage } from '@/components';

export const Wrapper = styled.article`
  main {
    margin-block-start: ${({ theme }) => theme.helpers.getMax(-220)};
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      aspect-ratio: 750/570;
      align-items: center;
      padding-block-start: unset;
    }
  `}
`;
