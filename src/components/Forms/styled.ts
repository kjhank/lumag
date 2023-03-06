import styled from 'styled-components';

export const FieldWrapper = styled.div<{ isFullWidth?: boolean; variant?: string }>`
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

  select {
    padding-block: 0.8em;
    padding-inline: 1em;
  }

  button {
    align-self: center;
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.helpers.getClamped(18)};
  padding-inline-start: ${({ theme }) => theme.helpers.getMin(12)};
`;

export const Input = styled.input`
  font-size: inherit;
  line-height: 2.8;
`;
