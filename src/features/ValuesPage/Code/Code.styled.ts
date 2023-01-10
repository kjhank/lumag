import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.helpers.getMin(57)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(32)};
  }
`;

export const Text = styled.p`
  padding-inline: 10%;
  ${({ theme }) => theme.helpers.getClamped(30)};
  font-family: ${({ theme }) => theme.fonts.types.fatHeading};
  text-align: center;
`;
