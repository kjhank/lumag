import styled, { css } from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => `${theme.helpers.getMin(72)} ${theme.helpers.getMin(340)}`};
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(80)};
  margin-block-start: ${({ theme }) => theme.helpers.getMin(78)};
  padding-inline: ${({ theme }) => theme.helpers.getMin(75)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

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
    height: ${({ theme }) => theme.helpers.getMin(150)};
    stroke: ${({ theme }) => theme.colors.neutral[20]};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        top: -10%;
        width: 100%;
        height: auto;
      }
    `}
  }

  > svg:not(.circle-cutout) {
    width: auto;
    height: ${({ theme }) => theme.helpers.getMin(80)};
    margin-block: ${({ theme }) => theme.helpers.getMin(36)};
    fill: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.brand};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        width: 60%;
        aspect-ratio: 1;
        height: auto;
      }
    `}
  }
`;

export const Label = styled.figcaption`
  padding-block-start: ${({ theme }) => theme.helpers.getMin(18)};
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.types.heading};
  text-align: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block-start: 20%;
    }
  `}
`;
