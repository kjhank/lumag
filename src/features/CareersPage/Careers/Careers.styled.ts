/* stylelint-disable value-keyword-case */
import styled, { css } from 'styled-components';

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
  font-weight: 700;
  ${({ theme }) => theme.helpers.getClamped(36)};
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
  gap: ${({ theme }) => theme.helpers.getMin(13)};
  font-weight: 100;
  ${({ theme }) => theme.fonts.sizes.s};

  > li {
    display: flex;
    gap: 1em;

    > svg {
      position: relative;
      flex: 1.5em 0 0;
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

export const FormSection = styled.section`
  position: relative;
  z-index: 5;
  padding-block: ${({ theme }) => theme.helpers.getMin(53)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
`;

export const Message = styled.h3`
  font-weight: 700;
  ${({ theme }) => theme.helpers.getClamped(36)};
  text-align: center;
`;

export const FormNode = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => `${theme.helpers.getMin(32)} ${theme.helpers.getMin(80)}`};
  margin-block-start: ${({ theme }) => theme.helpers.getMin(128)};
  margin-block-end: ${({ theme }) => theme.helpers.getMin(45)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const FormHeading = styled.h3`
  grid-column: -1 / 1;
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 700;
  ${({ theme }) => theme.helpers.getClamped(36)};
  text-align: center;
`;

export const FileInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-column: -1 / 1;
  width: 100%;
  margin: auto;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.56em;
    width: 20%;
    ${({ theme }) => theme.helpers.getClamped(18)};
    text-align: center;

    > .file-name {
      overflow: hidden;
      width: 100%;
      border-radius: ${({ theme }) => theme.radii.buttonLink};
      padding: 0.5em;
      background-color: ${({ theme }) => theme.colors.neutral[20]};
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > .no-file-chosen {
      ${({ theme }) => theme.fonts.sizes.xs};
    }
  }
`;

export const FileInput = styled.input.attrs({ type: 'file' })``;

export const Legal = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(20)};
  grid-column: -1/1;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  white-space: pre-line;

  > p {
    padding-inline-start: ${({ theme }) => theme.helpers.getMin(45)};
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
