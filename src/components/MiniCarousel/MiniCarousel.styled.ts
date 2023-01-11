import styled from 'styled-components';
import { WPImage } from '@/components';
import { MiniCarouselLayout } from '@/types';

export const Wrapper = styled.article<{ layout: MiniCarouselLayout }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'imageLeft' ? 'row' : 'row-reverse')};

  nav {
    justify-content: ${({ layout }) => (layout === 'imageLeft' ? 'flex-end' : 'flex-start')};
  }
`;

export const ImageWrapper = styled.div<{ noShift?: boolean }>`
  margin-block-start: ${({ noShift, theme }) => !noShift && theme.helpers.getMax(-100)};
  width: 50%;
`;

export const ButtonsWrapper = styled.nav`
  display: flex;
`;

export const Image = styled(WPImage)`
  aspect-ratio: 583/547;
`;

export const ContentList = styled.ul`
  position: relative;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[15]};
`;

export const Item = styled.li<{ isActive: boolean }>`
  position: absolute;
  inset: 0;
  z-index: ${({ isActive }) => (isActive ? 1 : 0)};
  filter: ${({ isActive }) => `opacity(${isActive ? 1 : 0})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.helpers.getMin(43)};
  height: 100%;
  padding: ${({ theme }) => `${theme.helpers.getMin(48)} ${theme.helpers.getMin(75)} 0`};
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
    width: ${({ theme }) => theme.helpers.getMin(24)};
    height: auto;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
  }

  :first-child {
    > svg {
      rotate: 180deg;
    }
  }
`;
