import styled, { css } from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-block-start: ${({ theme }) => theme.helpers.getMin(222)};
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      width: 100%;
      padding-block-start: ${theme.helpers.getMin(320)};
    }
  `}

  .innovation-carousel {
    position: relative;
    top: ${({ theme }) => theme.helpers.getMin(100)};
  }
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(42)};
  margin-block-end: ${({ theme }) => theme.helpers.getMin(75)};
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
    height: ${({ theme }) => theme.helpers.getMin(175)};
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
    height: ${({ theme }) => theme.helpers.getMin(110)};
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

