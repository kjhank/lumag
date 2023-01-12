import styled, { css } from 'styled-components';
import { WPImage } from '@/components';
import { MiniCarouselLayout } from '@/types';

export const Wrapper = styled.article<{ layout: MiniCarouselLayout }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'imageLeft' ? 'row' : 'row-reverse')};
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 1fr;
    }
  `}

  nav {
    justify-content: ${({ layout }) => (layout === 'imageLeft' ? 'flex-end' : 'flex-start')};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        justify-content: flex-end;
      }
    `}
  }
`;

export const ImageWrapper = styled.div<{ noShift?: boolean }>`
  margin-block-start: ${({ noShift, theme }) => !noShift && theme.helpers.getMax(-100)};
  width: 50%;
  ${({ theme }) => css`
  ${theme.mediaQueries.l} {
      position: relative;
      z-index: 2;
      width: 100%;
      margin-block-start: unset;
    }
  `}
`;

export const ButtonsWrapper = styled.nav`
  display: flex;
`;

export const Image = styled(WPImage)`
  aspect-ratio: 583/547;
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      aspect-ratio: unset;
    }
  `}
`;

export const ContentList = styled.ul`
  position: relative;
  display: grid;
  grid-template-areas: mini-carousel;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      bottom: min(100px, 13.3vw);
      width: 100%;
    }
  `}
`;

export const Item = styled.li<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: mini-carousel;
  gap: ${({ theme }) => theme.helpers.getMin(43)};
  height: 100%;
  padding: ${({ theme }) => `${theme.helpers.getMin(48)} ${theme.helpers.getMin(75)}`};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
`;

export const ItemHeading = styled.h3`
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
`;

export const ItemText = styled.p`
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.s};
`;

export const ItemButton = styled.button`
  aspect-ratio: 1;
  display: inline-grid;
  place-items: center;
  width: ${({ theme }) => theme.helpers.getMin(100)};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.neutral[5]};
  cursor: pointer;

  :disabled {
    filter: opacity(0.7);
    cursor: not-allowed;
  }

  > svg {
    width: 24%;
    height: auto;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
  }

  :first-child {
    > svg {
      rotate: 180deg;
    }
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      width: min(100px, 13.3vw);
    }
  `}
`;
