import styled, { css } from 'styled-components';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-80)};
  padding-block-start: ${({ theme }) => theme.helpers.getMin(80)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(133)};
  text-align: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block-end: ${theme.helpers.getMin(200)};
    }
  `}

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(40)};
    padding-inline: ${({ theme }) => theme.helpers.getMin(112)};
  }
`;

export const Heading = styled.h2`
  padding-block-start: ${({ theme }) => theme.helpers.getMin(40)};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral[30]};
  ${({ theme }) => theme.helpers.getClamped(18)};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  line-height: 1.5;
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(42)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const Item = styled.li``;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      position: relative;
    }
  `}

  .circle-cutout {
    position: absolute;
    width: auto;
    height: ${({ theme }) => theme.helpers.getMin(111)};
    stroke: ${({ theme }) => theme.colors.neutral[20]};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        top: -10%;
        width: 80%;
        height: auto;
      }
    `}
  }

  > svg:not(.circle-cutout) {
    width: auto;
    height: ${({ theme }) => theme.helpers.getMin(64)};
    margin-block: ${({ theme }) => theme.helpers.getMin(23.5)};
    fill: ${({ theme }) => theme.colors.brand};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        width: 45%;
        aspect-ratio: 1;
        height: auto;
      }
    `}
  }
`;

export const Label = styled.figcaption`
  padding-block-start: ${({ theme }) => theme.helpers.getMin(18)};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-family: ${({ theme }) => theme.fonts.types.heading};
  text-transform: uppercase;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block-start: 20%;
    }
  `}
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
