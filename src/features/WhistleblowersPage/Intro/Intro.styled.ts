import styled from 'styled-components';

export const IntroNode = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(24)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  text-align: center;
  padding-inline: 20%;
`;

export const Heading = styled.h2`
  ${({ theme }) => theme.fonts.sizes.xl};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 700;
`;

export const Subheading = styled.p`
  ${({ theme }) => theme.helpers.getClamped(30)};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: 700;
  margin-block-end: ${({ theme }) => theme.helpers.getMin(24)};
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.sizes.s};
  text-wrap: balance;
  font-weight: 300;
`;
