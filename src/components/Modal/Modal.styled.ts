import styled, { css } from 'styled-components';

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
  padding-block-start: ${({ theme }) => theme.helpers.getMin(64)};
  background-color: transparent;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  position: relative;
  filter: ${({ theme: { colors, helpers } }) => `drop-shadow(${helpers.getMin(13)} ${helpers.getMin(20)} ${helpers.getMin(30)} ${colors.neutral[100]}90)`};
  max-width: 80vw;
  height: 100%;
  max-height: 85vh;
  padding: 2%;
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: 90vw;
      min-height: unset;
    }
  `}
  transform: translateZ(0);
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
