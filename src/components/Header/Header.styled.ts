import styled, { css } from 'styled-components';

export const HeaderNode = styled.header<{
  justifyContent: string;
  paddingBlockEnd: number;
  paddingBlockStart: number;
  paddingInline: number | string;
}>`
  position: relative;
  height: max(37.3vw, 520px);
  padding-block-start: ${({ theme, paddingBlockStart }) => theme.helpers.getMin(paddingBlockStart)};
  padding-block-end: ${({ theme, paddingBlockEnd }) => theme.helpers.getMin(paddingBlockEnd)};
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.s};
  text-align: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.xl} {
      height: max(40vw, 400px);
    }
  `}
  ${({
    paddingBlockEnd, paddingBlockStart, theme,
  }) => css`
    ${theme.mediaQueries.m} {
      height: unset;
      padding-block-start: ${theme.helpers.getMin(paddingBlockStart * 2)};
      padding-block-end: ${theme.helpers.getMin(paddingBlockEnd * 2.5)};
    }
    ${theme.mediaQueries.s} {
      padding-block-start: ${theme.helpers.getMin(paddingBlockStart * 3.5)};
    }
  `}

  > div {
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyContent }) => justifyContent};
    gap: ${({ theme }) => theme.helpers.getMin(55)};
    align-items: center;
    height: 100%;
    padding-inline: ${({ theme, paddingInline }) => (typeof paddingInline === 'number' ? theme.helpers.getMin(paddingInline) : paddingInline)};
  }

  h2 {
    color: ${({ theme }) => theme.colors.brand};
    font-weight: 900;
    ${({ theme }) => theme.fonts.sizes.xxl};
    text-transform: uppercase;
    ${({ theme }) => css`
      ${theme.mediaQueries.m} {
        padding-inline: 0;
      }
    `}
  }
`;

export const Text = styled.blockquote`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(32)};
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-family: 'Avenir Book', sans-serif;

  hr {
    width: 12%;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[5]};
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.m} {
      align-items: center;
      padding-block-start: 0;
    }
  `}

  span {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
