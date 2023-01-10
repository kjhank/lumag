import styled, { css } from 'styled-components';

export const HeaderNode = styled.header`
  position: relative;
  aspect-ratio: 1920/716;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-block-start: ${({ theme }) => theme.helpers.getMin(251)};
  ${({ theme }) => theme.fonts.sizes.s};
  text-align: center;

  /* stylelint-disable-next-line selector-class-pattern */
  &.header--news-page {
    padding-block-start: ${({ theme }) => theme.helpers.getMin(180)};
  }

  h2 {
    /* padding-inline: 25%; */
    color: ${({ theme }) => theme.colors.brand};
    font-weight: 900;
    ${({ theme }) => theme.fonts.sizes.xxl};
    text-transform: uppercase;
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        padding-inline: 0;
      }
    `}
  }

  hr {
    width: 12%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[5]};
  }

  p {
    /* padding-inline: ${({ theme }) => theme.helpers.getMin(160)}; */
    color: ${({ theme }) => theme.colors.neutral[5]};
    font-family: 'Avenir Book', sans-serif;
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      aspect-ratio: 750/570;
      align-items: center;
      padding-block-start: 0;
    }
  `}
`;
