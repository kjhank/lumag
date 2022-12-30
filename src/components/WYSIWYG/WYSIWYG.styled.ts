import styled from 'styled-components';

export const Main = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: ${({ theme }) => theme.helpers.getMin(86)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  color: ${({ theme }) => theme.colors.neutral[95]};
  ${({ theme }) => theme.fonts.sizes.xs};
  white-space: pre-line;

  h2 {
    padding-block: 1em;
    color: ${({ theme }) => theme.colors.brand};
    font-weight: bold;
    ${({ theme }) => theme.helpers.getClamped(24)};
    text-align: center;
  }

  b,
  strong {
    font-weight: bolder;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    text-decoration: underline;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
