import styled, { css } from 'styled-components';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  aspect-ratio: 1920/718;
  margin-block-start: ${({ theme }) => theme.helpers.getMin(80)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      aspect-ratio: 750/570;
    }
  `}
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: -1;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
      margin-block-start: ${({ theme }) => theme.helpers.getMin(50)};
    }
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.neutral[10]};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.hero};
  line-height: 1;
  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      ${theme.fonts.sizes.xl}
    }
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.pages.homePage.carousel.textSize};
`;

export const Dots = styled.nav`
  position: absolute;
  inset: auto auto ${({ theme }) => theme.helpers.getMin(150)} 50%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(12)};
  translate: -50% 0 0;
`;

export const ActionButton = styled.button<{ isActive: boolean }>`
  width: ${({ isActive, theme }) => theme.helpers.getMin(isActive ? 47 : 17)};
  height: ${({ theme }) => theme.helpers.getMin(17)};
  border-radius: 100px;
  background-color: ${({ isActive, theme: { colors } }) => (isActive ? colors.brand : colors.neutral[5])};
  transition: ${({ theme }) => `width ${theme.transitions.default}, background-color ${theme.transitions.default}`};
  cursor: pointer;
`;
