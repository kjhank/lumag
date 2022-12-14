import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.main`
  color: ${({ theme }) => theme.colors.brand};
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const StyledLink = styled(Link)`
  color: #b00b13;
  text-decoration: underline;
`;
