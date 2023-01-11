import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => `${theme.helpers.getMin(220)} ${theme.helpers.getMin(90)}`};
  background-color: ${({ theme }) => theme.colors.neutral[100]};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(50)};
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.types.fatHeading};
  }
`;

export const FinePrint = styled.p`
  margin-block-start: ${({ theme }) => theme.helpers.getMin(40)};
  padding-inline: 5%;
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 500;
  ${({ theme }) => theme.helpers.getClamped(18)};
  font-family: ${({ theme }) => theme.fonts.types.heading};
  text-align: center;
`;
