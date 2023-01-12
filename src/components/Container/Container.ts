import styled, { css } from 'styled-components';
/* stylelint-disable declaration-colon-newline-after */

export const Container = styled.div<{ marginBlockEnd?: number; marginBlockStart?: number }>`
  position: relative;
  width: min(60.9375vw, 1170px);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.types.text};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: min(45.6vw, 342px);
    }
  `}
  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      width: 80vw;
    }
  `}
  ${({ marginBlockStart, theme }) => marginBlockStart && css`
    margin-block-start: ${marginBlockStart > 0 ? theme.helpers.getMin(marginBlockStart) : theme.helpers.getMax(marginBlockStart)};
  `};
  ${({ marginBlockEnd, theme }) => marginBlockEnd && css`
    z-index: 2;
    margin-block-end: ${marginBlockEnd > 0 ? theme.helpers.getMin(marginBlockEnd) : theme.helpers.getMax(marginBlockEnd)};

    + section {
      z-index: 1;
    }
  `};
`;
