import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(84)};
  margin-block: 0 ${({ theme }) => theme.helpers.getMin(84)};
`;

export const Item = styled.li`
  .grid-figure {
    padding: 0;
    background-color: transparent;
  }
`;
