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

  > div {
    position: relative;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    width: 100%;

    > .circle-cutout {
      width: 80%;
      height: 80%;
      stroke: ${({ theme }) => theme.colors.neutral[20]};
    }

    > svg:not(.circle-cutout) {
      position: absolute;
      inset: 50% 50%;
      width: auto;
      height: 45%;
      fill: ${({ theme }) => theme.colors.brand};
      color: ${({ theme }) => theme.colors.brand};
      translate: -50% -50% 0;
    }
  }
`;

export const Label = styled.figcaption`
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.types.heading};
  text-align: center;
`;
