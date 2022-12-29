import styled from 'styled-components';

export const Section = styled.section`
  padding-block: ${({ theme }) => theme.helpers.getMin(120)};
  font-weight: 300;

  > div {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.helpers.getMin(24)};
      padding-inline: 20%;
      text-align: center;
    }
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
`;

export const Subheading = styled.h3`
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(30)};
`;

export const Description = styled.p`
  margin-block-start: ${({ theme }) => theme.helpers.getMin(24)};
  ${({ theme }) => theme.fonts.sizes.s};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => `${theme.helpers.getMin(32)} ${theme.helpers.getMin(80)}`};
  margin-block-start: ${({ theme }) => theme.helpers.getMin(128)};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(20)};
  grid-column: -1/1;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};

  > p {
    padding-inline-start: ${({ theme }) => theme.helpers.getMin(45)};
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

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

export const Input = styled.input`
  font-size: inherit;
  line-height: 2.8;
`;

export const Label = styled.label`
  ${({ theme }) => theme.helpers.getClamped(18)};
  padding-inline-start: ${({ theme }) => theme.helpers.getMin(12)};
`;
