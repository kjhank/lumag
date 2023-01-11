import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  z-index: 1;
`;

export const List = styled.ul`
  margin-block: ${({ theme }) => `${theme.helpers.getMax(-221)} ${theme.helpers.getMax(-120)}`};
`;
