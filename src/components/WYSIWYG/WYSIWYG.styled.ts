import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-block-start: ${({ theme }) => theme.helpers.getMin(-220)};
  padding: ${({ theme }) => theme.helpers.getMin(86)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  color: ${({ theme }) => theme.colors.neutral[95]};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};

  h2 {
    padding-block: 1em;
    color: ${({ theme }) => theme.colors.brand};
    font-weight: bold;
    font-size: ${({ theme }) => theme.helpers.getClamped(24)};
    text-align: center;
  }
`;
