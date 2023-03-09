import styled, { css } from 'styled-components';
import { ModalVariant } from './Modal.types';

export const ModalWrapper = styled.dialog`
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow: auto;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  border: none;
  padding-block-start: ${({ theme }) => theme.helpers.getMin(32)};
  background-color: transparent;
  backdrop-filter: blur(5px);
`;

export const CloseButton = styled.button`
  position: absolute;
  inset: 0 0 auto auto;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  width: ${({ theme }) => theme.helpers.getMin(46)};
  border: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.neutral[100]}`};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.brand};
  ${({ theme }) => theme.helpers.getClamped(23)};
  transition: filter ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  translate: 50% -50% 0;
  /* stylelint-disable */
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: ${theme.helpers.getMin(92)};
    }
  `}
  /* stylelint-enable */

  :hover {
    filter: contrast(120%);
  }
`;

export const ModalContainer = styled.div<{ $aspectRatio?: number | 'auto'; variant: ModalVariant }>`
  position: relative;
  overflow: auto;
  filter: ${({ theme: { colors, helpers } }) => `drop-shadow(${helpers.getMin(13)} ${helpers.getMin(20)} ${helpers.getMin(30)} ${colors.neutral[100]}90)`};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  max-width: 80vw;
  max-height: 85vh;
  border-radius: ${({ theme, variant }) => variant === 'yellow' && theme.helpers.getMin(32)};
  padding: ${({ variant }) => (variant === 'yellow' ? 0 : '2%')};
  background-color: ${({ theme, variant }) => (variant === 'white' ? theme.colors.neutral[15] : theme.colors.brand)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      max-width: 95vw;
    }
  `}
  transform: translateZ(0);

  > ${CloseButton} {
    width: ${({ theme }) => theme.helpers.getMin(48)};
    border-color: ${({ theme }) => theme.colors.neutral[5]};
    color: ${({ theme }) => theme.colors.neutral[5]};
    ${({ theme }) => theme.helpers.getClamped(24)};
    translate: -50% 50% 0;
  }
`;
