import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const buttonLinkStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(24)};
  border-radius: ${({ theme }) => theme.radii.buttonLink};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(17)};
  padding-block: ${({ theme }) => theme.helpers.getMin(15)};
  padding-inline: ${({ theme }) => theme.helpers.getMin(37)};
  transition: filter ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  :hover {
    filter: contrast(120%);

    > svg {
      translate: 100% 0 0;
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  > svg {
    width: auto;
    height: 1em;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
    transition: translate ${({ theme }) => theme.transitions.fast};
  }
`;

export const GatsbyLink = styled(Link)`
  ${buttonLinkStyle}
`;

export const Anchor = styled.a`
  ${buttonLinkStyle}
`;

export const Button = styled.button`
  ${buttonLinkStyle}
`;
