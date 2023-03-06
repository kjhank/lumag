import styled, { css } from 'styled-components';

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
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: 1fr;
    }
  `}
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
