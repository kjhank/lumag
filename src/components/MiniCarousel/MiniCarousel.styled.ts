import styled from 'styled-components';
import { WPImage } from '@/components';
import { MiniCarouselLayout } from '@/types';

export const Wrapper = styled.article<{ layout: MiniCarouselLayout }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'imageLeft' ? 'row' : 'row-reverse')};
`;

export const ImageWrapper = styled.div`
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-100)};
  width: 50%;
`;

export const ButtonsWrapper = styled.nav``;

export const Image = styled(WPImage)`
  aspect-ratio: 583/547;
`;

export const ContentList = styled.ul`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[15]};
`;

export const Item = styled.li`
  padding: ${({ theme }) => `${theme.helpers.getMin(48)} ${theme.helpers.getMin(75)} 0`};
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
