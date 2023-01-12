import styled from 'styled-components';
import { Container as GenericContainer, Header as GenericHeader } from '@/components';

export const Header = styled(GenericHeader)`
  /* align-items: center; */
  padding-block-start: ${({ theme }) => theme.helpers.getMin(180)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(110)};

  p {
    padding: 0;
  }

  h2 {
    padding-inline: 5%;
  }
`;

export const Container = styled(GenericContainer)`
  z-index: 1;
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-110)};
  margin-block-end: ${({ theme }) => theme.helpers.getMax(-160)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
`;
