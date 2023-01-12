/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components';
import { WPImage } from '../WPImage/WPImage';

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.helpers.getMin(46)};
  padding-inline: 15%;
  /* stylelint-disable */
  ${({ theme }) => css`
    ${theme.mediaQueries.xxl} {
      padding-inline: 5%;
    }
  `}
  /* stylelint-enable */

  ::before {
    content: '';
    position: absolute;
    z-index: 1;
    inset: 0 auto 0 50%;
    width: ${({ theme }) => theme.helpers.getMin(15)};
    border-radius: ${({ theme }) => theme.helpers.getMin(5)};
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    translate: -50% 0 0;
  }
`;

export const Description = styled.p`
  flex: 50%;
  order: 3;
  font-family: 'Avenir Book', sans-serif;
  ${({ theme }) => theme.helpers.getClamped(17)};
`;

export const Name = styled.h3`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(22)};
  width: 100%;
  padding: 0 25%;

  /* stylelint-disable */
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      padding: 0 10%;
    }
  `}
  /* stylelint-enable */

  ::before {
    content: '';
    position: absolute;
    inset: 50% auto auto 100%;
    z-index: -1;
    width: ${({ theme }) => theme.helpers.getMin(35)};
    aspect-ratio: 1;
    background-color: ${({ theme }) => theme.colors.brand};
    translate: -55% -50% 0;
    rotate: -45deg;
    transform-origin: center;
  }
`;

export const EventNode = styled.li`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(35)};
  padding: 0 10%;
  /* stylelint-disable */
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding: 0 5%;
    }
  `}
  /* stylelint-enable */

  :nth-child(odd) {
    flex-direction: row-reverse;

    > ${Description} {
      text-align: right;
    }

    ${Name} {
      ::before {
        inset: 50% 100% auto auto;
        translate: 55% -50% 0;
      }
    }

    header {
      ::before {
        rotate: 20deg;
      }

      ::after {
        rotate: 70deg;
      }
    }
  }

  ::before {
    content: '';
    order: 2;
    width: ${({ theme }) => theme.helpers.getMin(35)};
    aspect-ratio: 1;
    border: ${({ theme }) => `${theme.helpers.getMin(8)} solid ${theme.colors.brand}`};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    transition: ${({ theme }) => `filter ${theme.transitions.default}, scale ${theme.transitions.default}`};
  }

  :has(button:hover) {
    ::before {
      filter: contrast(120%);
      scale: 1.2;
    }
  }
`;

export const Header = styled.header`
  position: relative;
  aspect-ratio: 1;
  display: flex;
  flex: 50%;
  justify-content: center;
  align-items: center;
  order: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brand};
  font-family: ${({ theme }) => theme.fonts.types.fatHeading};
  text-transform: uppercase;

  ::before,
  ::after {
    content: '';
    position: absolute;
    inset: 0;
    border: ${({ theme }) => `${theme.helpers.getMin(4)} solid ${theme.colors.neutral[100]}`};
    border-radius: 50%;
    translate: 2% -2% 0;
  }

  ::before {
    border-left-color: transparent;
    rotate: 200deg;
  }

  ::after {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    rotate: 250deg;
  }
`;

export const Year = styled.time`
  ${({ theme }) => theme.helpers.getClamped(44)};
  text-decoration: underline ${({ theme }) => theme.colors.neutral[5]};
  text-decoration-thickness: ${({ theme }) => theme.helpers.getMin(2)};
  text-underline-offset: ${({ theme }) => theme.helpers.getMin(10)};
  ${({ theme }) => css`
  ${theme.mediaQueries.s} {
    ${theme.helpers.getClamped(32)};
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => theme.helpers.getClamped(22)};
  text-align: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      ${theme.helpers.getClamped(18)};
    }
  `}
`;

export const ActionButton = styled.button`
  position: absolute;
  inset: auto auto 0;
  z-index: 3;
  aspect-ratio: 1;
  width: ${({ theme }) => theme.helpers.getMin(78)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  transition: ${({ theme }) => `filter ${theme.transitions.default}`};
  translate: 0 40% 0;
  cursor: pointer;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: min(10vw, 750px);
    }
  `}

  > svg {
    width: 64%;
    height: auto;
    transition: ${({ theme }) => `scale ${theme.transitions.default}`};
  }

  :hover {
    filter: contrast(120%);

    > svg {
      scale: 1.1;
    }
  }
`;

export const EventImage = styled(WPImage)`
  width: 100%;
  max-width: 100%;
  height: auto;
`;
