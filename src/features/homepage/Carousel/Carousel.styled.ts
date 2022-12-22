import styled from 'styled-components';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  aspect-ratio: 1920/718;
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const List = styled.ul`
  position: relative;
  height: 100%;
`;

export const Item = styled.li<{ isActive: boolean }>`
  position: absolute;
  inset: 0;
  z-index: ${({ isActive }) => (isActive ? 2 : 1)};
  filter: opacity(${({ isActive }) => (isActive ? 1 : 0)});
  height: 100%;
  transition: filter ${({ theme }) => theme.transitions.default};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.helpers.getMin(11)};
    height: 100%;
    padding-inline: ${({ theme }) => theme.pages.homePage.carousel.paddingInline};

    > a {
      margin-top: ${({ theme }) => theme.helpers.getMin(50)};
    }
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.neutral[10]};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.hero};
  line-height: 1;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  font-size: ${({ theme }) => theme.pages.homePage.carousel.textSize};
`;
