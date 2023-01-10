import styled from 'styled-components';
import { Container as GenericContainer } from '@/components';

export const Container = styled(GenericContainer)`
  z-index: 1;
  margin-block: ${({ theme }) => theme.helpers.getMax(-110)};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
`;
