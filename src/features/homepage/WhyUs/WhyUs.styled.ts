import styled, { css } from 'styled-components';
import { SectionHeading } from '@/components/styled';

export const Section = styled.section`
  position: relative;
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-80)};
  padding-block-start: ${({ theme }) => theme.helpers.getMin(80)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(133)};
  text-align: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block-end: ${theme.helpers.getMin(200)};
    }
  `}

  > div {
    display: grid;
    grid-template-rows: 1fr;
    gap: ${({ theme }) => theme.helpers.getMin(40)};
    padding-inline: ${({ theme }) => theme.helpers.getMin(112)};
  }
`;

export const Heading = styled(SectionHeading)`
  padding-block-start: ${({ theme }) => theme.helpers.getMin(40)};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral[30]};
  ${({ theme }) => theme.helpers.getClamped(18)};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  line-height: 1.5;
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(42)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const Item = styled.li``;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      position: relative;
    }
  `}

  > div {
    position: relative;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    width: 100%;

    > .circle-cutout {
      width: 80%;
      height: 80%;
      stroke: ${({ theme }) => theme.colors.neutral[20]};
    }

    > svg:not(.circle-cutout) {
      position: absolute;
      inset: 50% 50%;
      width: auto;
      height: 45%;
      fill: ${({ theme }) => theme.colors.brand};
      color: ${({ theme }) => theme.colors.brand};
      translate: -50% -50% 0;
    }
  }
`;

export const Label = styled.figcaption`
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(16)};
  font-family: ${({ theme }) => theme.fonts.types.heading};
  text-align: center;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      ${theme.helpers.getClamped(24)};
    }
  `}
`;
