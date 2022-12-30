// @ts-nocheck

import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: min(60.9375vw, 1170px);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.types.text};
  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      width: min(45.6vw, 342px);
    }
  `}
`;
