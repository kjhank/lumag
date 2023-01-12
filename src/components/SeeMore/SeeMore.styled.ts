import styled, { css } from 'styled-components';

export const Section = styled.aside`
  padding-block: ${({ theme }) => `${theme.helpers.getMin(46)} ${theme.helpers.getMin(92)}`};
  background-color: ${({ theme }) => theme.colors.neutral[15]};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(64)};

    h2 {
      color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: ${({ theme }) => theme.helpers.getMin(100)};
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Item = styled.article`
  position: relative;
  filter: ${({ theme: { colors, helpers } }) => `drop-shadow(${helpers.getMax(-41)} ${helpers.getMin(41)} ${helpers.getMin(35)} ${colors.neutral[95]}69)`};
  aspect-ratio: 579/338;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(16)};
  padding: 5%;

  /* stylelint-disable-next-line no-descending-specificity */
  > a {
    position: absolute;
    inset: auto auto 0;
    z-index: 1;
    translate: 0 50% 0;
  }

  picture {
    overflow: hidden;
  }

  img {
    transition: ${({ theme }) => `scale ${theme.transitions.slow}`};
    object-fit: cover;
  }

  :hover {
    > picture {
      > img {
        scale: 1.025;
      }
    }
  }
`;

export const Heading = styled.h3`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 900;
  ${({ theme }) => theme.fonts.sizes.m};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  text-align: center;
  white-space: pre-line;
`;

export const Subheading = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.brand};
  ${({ theme }) => theme.fonts.sizes.s};
  text-align: center;
`;
