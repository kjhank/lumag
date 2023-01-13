import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  z-index: 2;

  > div {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-block-start: ${({ theme }) => theme.helpers.getMin(70)};
    padding-block-end: ${({ theme }) => theme.helpers.getMin(75)};
    border-block-end: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.neutral[25]}`};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        grid-template-columns: 1fr;
      }
    `}
  }
`;

export const NewsHeading = styled.h2`
  position: absolute;
  inset: auto auto 100% 0;
  z-index: 3;
  padding-block: ${({ theme }) => theme.helpers.getMin(36)};
  padding-inline-end: ${({ theme }) => theme.helpers.getMin(76)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(30)};

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0 0 0 -50vw;
    background-color: inherit;
  }
`;

export const News = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.helpers.getMin(43)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block-end: ${theme.helpers.getMin(64)};
      > a {
        margin: auto;
      }
    }
  `}
`;

export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(57)};
`;

export const NewsNode = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.helpers.getMin(20)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(26)};
  padding-inline-end: ${({ theme }) => theme.helpers.getMin(50)};

  ::after {
    content: '';
    width: 85%;
    height: ${({ theme }) => theme.helpers.getMin(2)};
    margin-block-start: ${({ theme }) => theme.helpers.getMin(16)};
    background-color: ${({ theme }) => theme.colors.neutral[25]};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        width: 100%;
      }
    `}
  }
`;

export const Heading = styled.h3`
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(17.5)};
`;

export const DateElem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(7)};
  color: ${({ theme }) => theme.colors.neutral[50]};
  ${({ theme }) => theme.helpers.getClamped(13)};

  > svg {
    width: auto;
    height: 1em;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
  }
`;

export const Excerpt = styled.p`
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(15)};
`;

export const NewsLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1ch;
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(13)};
  text-transform: uppercase;

  > svg {
    width: auto;
    height: 0.5em;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
    transition: translate ${({ theme }) => theme.transitions.fast};
  }

  :hover {
    > svg {
      translate: 300% 0 0;
    }
  }
`;

export const Promos = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(85)};
`;

export const Image = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  > img {
    transition: ${({ theme }) => `scale ${theme.transitions.slow}`};
    object-fit: cover;
  }
`;

export const SinglePromo = styled.article`
  position: relative;
  filter: ${({ theme: { colors, helpers } }) => `drop-shadow(${helpers.getMax(-41)} ${helpers.getMin(41)} ${helpers.getMin(35)} ${colors.neutral[100]}79)`};
  aspect-ratio: 579/338;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transform: translateZ(0);

  /* stylelint-disable-next-line no-descending-specificity */
  > a {
    position: relative;
    z-index: 1;
    translate: 0 50% 0;
  }

  :hover {
    ${Image} {
      > img {
        scale: 1.025;
      }
    }
  }
`;

export const PromoText = styled.p`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 900;
  ${({ theme }) => theme.helpers.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  text-align: center;
  white-space: pre-line;
`;
