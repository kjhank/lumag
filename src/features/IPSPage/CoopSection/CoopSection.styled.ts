import styled, { css } from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => theme.helpers.getMin(75)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(83)};
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
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: bold;
  ${({ theme: { helpers } }) => helpers.getClamped(22)};
  line-height: 1.68;
  text-align: center;
`;
