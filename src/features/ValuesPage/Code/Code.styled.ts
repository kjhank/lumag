import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.helpers.getMin(57)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(32)};
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.m} {
      a {
        position: relative;
        width: 100%;
        padding: 1em 3em;
        ${theme.helpers.getClamped(32)};
        text-align: center;

        > svg {
          position: absolute;
          right: 5%;
        }
      }
    }
  `}
`;

export const Text = styled.p`
  padding-inline: 10%;
  ${({ theme }) => theme.helpers.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.types.fatHeading};
  text-align: center;
`;
