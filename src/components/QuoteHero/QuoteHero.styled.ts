import styled, { css } from 'styled-components';
import { WPImage } from '../WPImage/WPImage';

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-110)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(118)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      display: flex;
      flex-direction: column-reverse;
      padding-block-end: ${theme.helpers.getMin(110)};
    }
  `}
`;

export const QuoteWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(12)};
  padding: 16%;
  background-color: ${({ theme }) => theme.colors.neutral[17]};
`;

export const Author = styled.figcaption`
  position: relative;
  z-index: 2;
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
`;

export const Subheading = styled.p`
  position: relative;
  z-index: 2;
  align-self: start;
  padding: ${({ theme }) => `${theme.helpers.getMin(8)} ${theme.helpers.getMin(16)}`};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.neutral['5']};
  line-height: 1;
  ${({ theme }) => theme.fonts.sizes.s};
`;

export const Quote = styled.blockquote`
  position: relative;
  z-index: 1;
  margin-block-start: auto;
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(31)};

  p {
    position: relative;
  }

  ::before,
  ::after {
    position: absolute;
    color: ${({ theme }) => theme.colors.neutral[5]};
    ${({ theme }) => theme.helpers.getClamped(303)};
  }

  ::before {
    content: '“';
    inset: 0 auto auto 0;
    translate: -67% -30% 0;
  }

  ::after {
    content: '”';
    inset: 0 0 auto auto;
    translate: 55% 30% 0;
  }
`;

export const Image = styled(WPImage) <{ aspectRatio: number }>`
  position: relative;
  top: ${({ theme }) => theme.helpers.getMax(-100)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      top: auto;
    }
  `}
`;
