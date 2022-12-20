import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: min(60.9375vw, 1170px);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.types.text};
`;
