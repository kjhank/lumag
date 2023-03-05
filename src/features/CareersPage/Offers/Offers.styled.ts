/* stylelint-disable value-keyword-case */
import styled from 'styled-components';

export const OffersSection = styled.section`
  position: relative;
  isolation: isolate;

  > picture {
    z-index: -1;

    > img {
      height: auto;
      object-fit: unset;
    }
  }

  > div > h2 {
    padding-block: ${({ theme }) => theme.helpers.getMin(60)};
    color: ${({ theme }) => theme.colors.brand};
    font-weight: bold;
    ${({ theme }) => theme.fonts.sizes.xl};
    text-align: center;
  }
`;

export const OfferName = styled.h3`
  text-transform: uppercase;
`;

export const OfferContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.helpers.getMin(52)};
`;

export const OfferSection = styled.section`
  display: flex;
  flex-direction: inherit;
  align-items: inherit;
  gap: inherit;

  > h4 {
    color: ${({ theme }) => theme.colors.brand};
    font-weight: bold;
    ${({ theme }) => theme.helpers.getClamped(24)};
  }
`;

export const OfferList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.helpers.getMin(13)};
  font-weight: 100;
  ${({ theme }) => theme.fonts.sizes.s};

  > li {
    display: flex;
    gap: 1em;

    > svg {
      position: relative;
      top: -0.25em;
      width: auto;
      height: 1.5em;
      color: ${({ theme }) => theme.colors.brand};

      .circle-check-path {
        fill: currentColor;
        stroke: currentColor;
        stroke-width: 1em;
      }
    }
  }
`;
