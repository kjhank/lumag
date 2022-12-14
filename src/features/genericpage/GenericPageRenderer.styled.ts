import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  main {
    margin-block-start: ${({ theme }) => theme.helpers.getMax(-220)};
    padding: ${({ theme }) => theme.helpers.getMin(86)};
    background-color: ${({ theme }) => theme.colors.neutral[5]};
    color: ${({ theme }) => theme.colors.neutral[95]};
    ${({ theme }) => theme.fonts.sizes.xs};
    white-space: pre-line;

    h2 {
      color: ${({ theme }) => theme.colors.brand};
      ${({ theme }) => theme.helpers.getClamped(24)};
    }
  }
`;

export const HeaderNode = styled.header`
  position: relative;
  aspect-ratio: 1920/716;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-block-start: ${({ theme }) => theme.helpers.getMin(251)};
  font-weight: 900;
  ${({ theme }) => theme.fonts.sizes.xxl};
  text-align: center;
  text-transform: uppercase;

  /* stylelint-disable-next-line no-descending-specificity */
  h2 {
    padding-inline: 25%;
    color: ${({ theme }) => theme.colors.brand};
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      aspect-ratio: 750/570;
      align-items: center;
      padding-block-start: unset;
    }
  `}
`;
