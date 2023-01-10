import styled from 'styled-components';

export const Section = styled.section`
  padding-block: ${({ theme }) => `${theme.helpers.getMin(200)} ${theme.helpers.getMin(120)}`};
`;
