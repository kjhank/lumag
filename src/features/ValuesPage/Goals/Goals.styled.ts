import styled, { css } from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => `${theme.helpers.getMin(164)} ${theme.helpers.getMin(115)}`};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: 100%;
      padding-block-start: ${theme.helpers.getMin(264)};
    }
  `}

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(34)};
  }
`;

export const Text = styled.p`
  margin-block-end: ${({ theme }) => theme.helpers.getMin(45)};
  padding-inline: 10%;
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.s};
  text-align: center;
`;
