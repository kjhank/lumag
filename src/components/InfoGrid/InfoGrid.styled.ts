import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  padding: ${({ theme }) => theme.helpers.getMin(31)};
  background-color: ${({ theme }) => theme.colors.brand};
`;

export const Item = styled.li`
  position: relative;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.helpers.getMin(31)};
  font-weight: bold;
  ${({ theme }) => theme.helpers.getClamped(24)};
  text-align: center;

  ::before,
  ::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
  }

  :nth-child(3n+2),
  :nth-child(3n+3) {
    ::before {
      top: ${({ theme }) => theme.helpers.getMin(31)};
      bottom: ${({ theme }) => theme.helpers.getMin(31)};
      left: 0;
      width: 1px;
    }
  }

  :nth-child(n+4) {
    ::after {
      top: 0;
      right: ${({ theme }) => theme.helpers.getMin(31)};
      left: ${({ theme }) => theme.helpers.getMin(31)};
      height: 1px;
    }
  }
`;
