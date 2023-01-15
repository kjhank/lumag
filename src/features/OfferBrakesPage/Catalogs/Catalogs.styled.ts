import styled, { css } from 'styled-components';
import { WPImage } from '@/components';

export const Section = styled.section`
  padding-block: ${({ theme }) => `${theme.helpers.getMin(238)} ${theme.helpers.getMin(142)}`};
  position: relative;
  ${({ theme }) => css`
  ${theme.mediaQueries.l} {
      padding-block-start: ${theme.helpers.getMin(320)};
    }
  `}

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.helpers.getMin(40)};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(85)};
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      grid-template-columns: 1fr;
      width: 100%;
    }
  `}
`;

export const Image = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => `scale ${theme.transitions.slow}`};
    object-fit: cover;
  }
`;

export const Catalog = styled.article`
  position: relative;
  filter: ${({ theme: { colors, helpers } }) => `drop-shadow(${helpers.getMax(-41)} ${helpers.getMin(41)} ${helpers.getMin(35)} ${colors.neutral[100]}79)`};
  aspect-ratio: 579/338;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transform: translateZ(0);

  /* stylelint-disable-next-line no-descending-specificity */
  > a {
    position: relative;
    z-index: 1;
    translate: 0 50% 0;
    white-space: nowrap;
  }

  :hover {
    ${Image} {
      > img {
        scale: 1.025;
      }
    }
  }
`;

export const CatalogText = styled.p`
  position: relative;
  z-index: 1;
  padding-inline: 15%;
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 900;
  ${({ theme }) => theme.helpers.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  text-align: center;
  white-space: pre-line;
`;
