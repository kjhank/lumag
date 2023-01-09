import styled from 'styled-components';
import { SectionHeading } from '@/components/styled';

export const Section = styled.section`
  .carousel-characteristics {
    margin-block-end: ${({ theme }) => theme.helpers.getMin(135)};
  }
`;

export const Heading = styled(SectionHeading)`
  margin-block-end: ${({ theme }) => theme.helpers.getMin(150)};
`;
