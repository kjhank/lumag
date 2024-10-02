import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div<{ hasDecoration?: boolean; isFullWidth?: boolean; variant?: string }>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'checkbox' ? 'row' : 'column')};
  align-items: flex-start;
  grid-column: ${({ isFullWidth }) => isFullWidth && '-1 / 1'};
  gap: ${({ theme }) => theme.helpers.getMin(8)};

  input {
    accent-color: ${({ theme }) => theme.colors.brand};
  }

  input:not([type='checkbox']),
  select,
  textarea {
    appearance: none;
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
    ${({ theme }) => theme.fonts.sizes.xs};
  }

  input[type='date'] {
    height: 100%;

    /* stylelint-disable */
    ${({ theme }) => css`
    /* stylelint-enable */
      ${theme.mediaQueries.s} {
        padding-block: 0.7em;
      }
    `}

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

  > div:not(.file-input-wrapper, .dumb) {
    position: relative;
    width: 100%;
    height: 100%;

    > svg {
      position: absolute;
      inset: ${({ isFullWidth }) => (isFullWidth ? '50% 2.5% auto auto' : '50% 5% auto auto')};
      width: 1em;
      height: auto;
      translate: 50% -50% 0;
      pointer-events: none;
    }
    ${({ hasDecoration, isFullWidth }) => hasDecoration && css`
      ::after {
        content: '';
        position: absolute;
        inset: ${isFullWidth ? '10% 5% 10% auto' : '10% 10% 10% auto'};
        width: 1px;
        background-color: ${({ theme }) => theme.colors.neutral[95]};
        pointer-events: none;
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
        pointer-events: none;
      }
    `}
  }

  &:has(input[type='checkbox']) {
    flex-direction: row;
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        a {
          margin-inline-start: auto;
        }
      }
    `}
  }

  &.areas {
    display: grid;
    grid-template: 'label' 'content' / 1fr;

    > label {
      grid-area: label;
    }

    > .content {
      grid-area: content;

      &.description {
        padding: 0.7em 2em;
        color: ${({ theme }) => theme.colors.neutral[25]};
        font-style: italic;
        font-size: ${({ theme }) => theme.helpers.getClamped(18)};
        transition: opacity ${({ theme }) => theme.transitions.fast};
        pointer-events: none;
      }

      &.has-value {
        opacity: 0;
      }
    }
  }

  &.files {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: ${({ theme }) => theme.helpers.getMin(20)};

    label {
      inline-size: 100%;
    }

    .description {
      inline-size: fit-content;
      ${({ theme }) => theme.fonts.sizes.s};

      ${({ theme }) => css`
        ${theme.mediaQueries.s} {
          inline-size: 80%;

          + .file-input-wrapper {
            margin-inline-start: auto;
          }
        }
      `}
    }
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.helpers.getClamped(18)};
  padding-inline-start: ${({ theme }) => theme.helpers.getMin(12)};

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }

  &.files {
    font-weight: bold;
  }

  & + p {
    padding-inline-start: ${({ theme }) => theme.helpers.getMin(12)};
  }

  &.dumb {
    inline-size: 100%;
  }

  & + .dumb-description {
    inline-size: 51%;
    ${({ theme }) => theme.fonts.sizes.s};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        inline-size: 65%;
      }
    `}
  }
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

export const Textarea = styled.textarea`
  min-height: ${({ theme }) => theme.helpers.getMin(151)};
  padding-block: 0.7em;
  resize: block;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => `${theme.helpers.getMin(32)} ${theme.helpers.getMin(80)}`};
  margin-block-start: ${({ theme }) => theme.helpers.getMin(128)};
  margin-block-end: ${({ theme }) => theme.helpers.getMin(45)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const FramedLink = styled.a`
  display: inline-grid;
  place-items: center;
  inline-size: ${({ theme }) => theme.helpers.getMin(42)};
  flex-shrink: 0;
  border: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.brand}`};
  border-radius: ${({ theme }) => theme.radii.frameLink};
  ${({ theme }) => theme.fonts.sizes.xs};

  &.text-variant {
    inline-size: ${({ theme }) => theme.helpers.getMin(200)};
    padding: 0.5em;
    font-weight: bold;
    text-align: center;
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      inline-size: 10%;
    }
  `}
`;

export const FilesWrapper = styled.div`
  display: grid;
  grid-template: 'input';
  inline-size: ${({ theme }) => theme.helpers.getMin(42)};
  block-size: ${({ theme }) => theme.helpers.getMin(33)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      inline-size: 10%;
      block-size: auto;
    }
  `}

  && {
    > input {
      overflow: hidden;
      opacity: 0;
    }

    > svg.cloud-arrow-up-icon {
      border: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.brand}`};
      border-radius: ${({ theme }) => theme.radii.frameLink};
    }

    > input,
    svg.cloud-arrow-up-icon {
      grid-area: input;
    }
  }
`;
