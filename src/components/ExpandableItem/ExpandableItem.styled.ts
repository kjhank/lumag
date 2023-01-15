import styled, { css } from 'styled-components';
import { WPImage } from '../WPImage/WPImage';
import { WYSIWYG } from '../WYSIWYG/WYSIWYG';

export const ItemNode = styled.li`
  display: flex;
  scroll-margin-top: 100px;

  :not(:last-child) {
    margin-block: ${({ theme }) => theme.helpers.getMin(50)};
    border-block-end: ${({ theme }) => `${theme.helpers.getMin(1)} solid ${theme.colors.neutral[20]}`};
    padding-block-end: ${({ theme }) => theme.helpers.getMin(50)};
  }

  > div {
    width: 50%;
    background-color: ${({ theme }) => theme.colors.neutral[15]};
    ${({ theme }) => css`
      ${theme.mediaQueries.l} {
        width: 100%;
      }
    `}
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.l} {
      flex-direction: column;
    }
  `}
`;

export const ItemContent = styled.div<{ isExpanded?: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.helpers.getMin(25)};
  padding: ${({ theme }) => `${theme.helpers.getMin(49)} ${theme.helpers.getMin(74)}`};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  color: ${({ theme }) => theme.colors.neutral[100]};
  ${({ theme }) => theme.helpers.getClamped(18)};

  .clamped {
    white-space: pre-line;
  }

  button {
    border: ${({ isExpanded, theme }) => `${theme.helpers.getMin(2)} solid ${isExpanded ? theme.colors.neutral[100] : theme.colors.brand}`};
    background-color: ${({ isExpanded, theme }) => isExpanded && theme.colors.neutral[15]};

    > svg {
      rotate: ${({ isExpanded }) => isExpanded && '-90deg'};
      ${({ isExpanded, theme }) => css`
      ${theme.mediaQueries.l} {
          rotate: ${isExpanded ? '-90deg' : '90deg'};
        }
      `}
    }

    :hover {
      > svg {
        translate: ${({ isExpanded }) => (isExpanded ? '0 -50% 0' : '100% 0 0')};
        ${({ theme }) => css`
          ${theme.mediaQueries.l} {
            translate: none;
          }
        `}
      }
    }
  }
`;

export const ItemHeading = styled.h2`
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(30)};
`;

export const ItemText = styled(WYSIWYG)`
  font-weight: 300;
`;

export const ItemImage = styled(WPImage)`
  position: relative;
  width: 50%;
  height: 100%;
  /* stylelint-disable */
  ${({ theme }) => css`
  ${theme.mediaQueries.l} {
    width: 100%;
  }
  `}
  /* stylelint-enable */

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: ${({ theme }) => theme.helpers.getMin(20)};
    height: ${({ theme }) => theme.helpers.getMin(20)};
    background-color: ${({ theme }) => theme.colors.neutral[15]};
    rotate: 45deg;
    translate: 50% -50% 0;
    transform-origin: center;
    ${({ theme }) => css`
      ${theme.mediaQueries.l} {
        top: 100%;
        left: 50%;
        right: auto;
        translate: -50% -50% 0;
      }
    `}
  }
`;
