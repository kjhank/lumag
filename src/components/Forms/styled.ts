import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div<{ hasDecoration?: boolean; isFullWidth?: boolean; variant?: string }>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'checkbox' ? 'row' : 'column')};
  align-items: flex-start;
  grid-column: ${({ isFullWidth }) => isFullWidth && '-1 / 1'};
  gap: ${({ theme }) => theme.helpers.getMin(8)};

  input:not([type='checkbox']),
  select,
  textarea {
    display: block;
    width: 100%;
    border: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.neutral[100]}`};
    border-radius: ${({ theme }) => theme.radii.input};
    padding-inline: 1em;

    :focus {
      outline-color: ${({ theme }) => theme.colors.brand};
    }
  }

  input[type='checkbox'] + label {
    font-size: ${({ theme }) => theme.fonts.sizes.xs};
  }

  input[type='date'] {
    height: 100%;
    padding-block: 0.7em;

    ::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }

  select {
    padding-block: 0.8em;
    padding-inline: 1em;
    height: 100%;
    appearance: none;
  }

  button {
    align-self: center;
  }

  > div {
    position: relative;
    width: 100%;
    height: 100%;

    > svg {
      position: absolute;
      inset: ${({ isFullWidth }) => (isFullWidth ? '50% 2.5% auto auto' : '50% 5% auto auto')};
      width: 1em;
      height: auto;
      translate: 50% -50% 0;
    }
    ${({ hasDecoration, isFullWidth }) => hasDecoration && css`
      ::after {
        content: '';
        position: absolute;
        inset: ${isFullWidth ? '10% 5% 10% auto' : '10% 10% 10% auto'};
        width: 1px;
        background-color: ${({ theme }) => theme.colors.neutral[95]};
      }

      ::before {
        content: '';
        position: absolute;
        inset: 50% 2px auto auto;
        z-index: 0;
        width: calc(10% - 2px);
        height: 80%;
        background-color: ${({ theme }) => theme.colors.neutral[5]};
        translate: 0 -50% 0;
      }
    `}
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.helpers.getClamped(18)};
  padding-inline-start: ${({ theme }) => theme.helpers.getMin(12)};
`;

export const Input = styled.input`
  font-size: inherit;
  line-height: 2.8;

  ::-webkit-datetime-edit {
    margin-bottom: -2px;
    padding: 0;
    line-height: 1;
  }
`;
