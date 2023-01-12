import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding-block: ${({ theme }) => `${theme.helpers.getMin(200)} ${theme.helpers.getMin(120)}`};
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      article > section {
      padding: ${`${theme.helpers.getMin(48)} ${theme.helpers.getMin(75)}`};
      }
    }
  `}
`;
