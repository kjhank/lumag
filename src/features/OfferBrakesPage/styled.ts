import styled from 'styled-components';
import { Container as GenericContainer } from '@/components';

export const Container = styled(GenericContainer)`
  z-index: 1;
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-110)};
  margin-block-end: ${({ theme }) => theme.helpers.getMax(-160)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
`;
