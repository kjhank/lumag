import { Link } from 'gatsby';
import styled from 'styled-components';
import { getClamped, getMin } from '@/theme/helpers';

export const LinkNode = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${() => getMin(24)};
  border-radius: ${({ theme }) => theme.radii.buttonLink};
  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: bold;
  font-size: ${() => getClamped(17)};
  padding-block: ${() => getMin(15)};
  padding-inline: ${() => getMin(37)};
  transition: filter ${({ theme }) => theme.transitions.fast};

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
