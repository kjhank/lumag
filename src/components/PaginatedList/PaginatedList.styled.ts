import styled from 'styled-components';

export const Wrapper = styled.article`
  > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.helpers.getMin(80)};
    margin-block: ${({ theme }) => `${theme.helpers.getMax(-160)} ${theme.helpers.getMin(90)}`};
  }
`;

export const List = styled.ul``;

export const Pagination = styled.nav`
  display: grid;
  place-items: center;
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.s};
`;

export const Pages = styled.menu`
  display: flex;
  align-items: center;
  gap: 1ch;
  border-radius: ${({ theme }) => theme.radii.buttonLink};
  padding-inline: 1ch;
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  list-style-type: none;

  > li:first-child {
    margin-inline-end: 1ch;
  }

  > li:last-child {
    margin-inline-start: 1ch;
  }
`;

export const PageButton = styled.button<{ hasFlippedIcon?: boolean; isCurrent?: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    inset: auto 0 0.1em;
    height: ${({ theme }) => theme.helpers.getMin(1)};
    background-color: ${({ isCurrent, theme }) => (isCurrent ? theme.colors.neutral[60] : 'transparent')};
  }

  > svg {
    width: 1ch;
    height: auto;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
    rotate: ${({ hasFlippedIcon }) => hasFlippedIcon && '180deg'};
  }
`;
