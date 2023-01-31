import styled, { css } from 'styled-components';
import { ToastVariant } from '@/types';

export const ToastNode = styled.article<{ isVisible: boolean; variant: ToastVariant }>`
  position: fixed;
  z-index: 100;
  inset: 100% auto auto 50%;
  border:
    ${({ theme, variant }) => {
    if (variant === 'success') {
      return `${theme.helpers.getMin(3)} solid ${theme.colors.success}`;
    }

    if (variant === 'error') {
      return `${theme.helpers.getMin(3)} solid ${theme.colors.error}`;
    }

    return `${theme.helpers.getMin(3)} solid ${theme.colors.neutral[60]}`;
  }};
  border-top-right-radius: ${({ theme }) => theme.helpers.getMin(16)};
  border-top-left-radius: ${({ theme }) => theme.helpers.getMin(16)};
  border-bottom: none;
  padding: 1em 2em;
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  color:
    ${({ theme, variant }) => {
    if (variant === 'success') return theme.colors.success;

    if (variant === 'error') return theme.colors.error;

    return theme.colors.neutral[60];
  }};
  text-align: center;
  translate: ${({ isVisible }) => (isVisible ? '-50% -100% 0' : '-50% 30% 0')};
  transition: translate ${({ theme }) => theme.transitions.default} cubic-bezier(0.87, 0, 0.13, 1);
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: 90vw;
    }
  `}
`;

export const CloseButton = styled.button.attrs({ type: 'button' }) <{ variant: ToastVariant }>`
  position: absolute;
  inset: 0 0 auto auto;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  width: ${({ theme }) => theme.helpers.getMin(48)};
  height: ${({ theme }) => theme.helpers.getMin(48)};
  border:
    ${({ theme, variant }) => {
    if (variant === 'success') {
      return `${theme.helpers.getMin(3)} solid ${theme.colors.success}`;
    }

    if (variant === 'error') {
      return `${theme.helpers.getMin(3)} solid ${theme.colors.error}`;
    }

    return `${theme.helpers.getMin(3)} solid ${theme.colors.neutral[60]}`;
  }};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  color:
    ${({ theme, variant }) => {
    if (variant === 'success') return theme.colors.success;

    if (variant === 'error') return theme.colors.error;

    return theme.colors.neutral[60];
  }};
  font-size: 0.75em;
  translate: 50% -50% 0;
  transition: ${({ theme }) => `color ${theme.transitions.fast}, background-color ${theme.transitions.fast}`};
  cursor: pointer;

  > span {
    position: absolute;
    inset: 50% auto auto 50%;
    translate: -50% -50% 0;
  }

  :hover {
    background-color:
      ${({ theme, variant }) => {
    if (variant === 'success') return theme.colors.success;

    if (variant === 'error') return theme.colors.error;

    return theme.colors.neutral[60];
  }};
    color: ${({ theme }) => theme.colors.neutral[5]};
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: 8vw;
      height: 8vw;
    }
  `}
`;
