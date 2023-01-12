import styled from 'styled-components';
import { Container as GenericContainer, Header as GenericHeader } from '@/components';

export const Header = styled(GenericHeader)`
  padding-block-end: ${({ theme }) => theme.helpers.getMin(110)};
  font-weight: 300;

  p {
    padding: 0;
  }

  h2 {
    padding-inline: 5%;
  }

  footer {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const Container = styled(GenericContainer)`
  z-index: 1;
  margin-block: ${({ theme }) => theme.helpers.getMax(-110)};
  background-color: ${({ theme }) => theme.colors.neutral[15]};

  & + section {
    padding-block: ${({ theme }) => `${theme.helpers.getMin(182)} ${theme.helpers.getMin(70)}`};
    color: ${({ theme }) => theme.colors.neutral[5]};
  }
`;
