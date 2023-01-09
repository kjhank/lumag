import styled from 'styled-components';

export const Section = styled.section`
  .carousel-characteristics {
    margin-block-end: ${({ theme }) => theme.helpers.getMin(135)};
  }
`;

export const Heading = styled.h2`
  margin-block-end: ${({ theme }) => theme.helpers.getMin(150)};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
  text-align: center;
`;
