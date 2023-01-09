import styled from 'styled-components';

export const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(32)};
    padding-block: ${({ theme }) => theme.helpers.getMin(70)};
    font-weight: 300;
    text-align: center;
  }
`;

export const Text = styled.p`
  padding: 0 5%;
  ${({ theme }) => theme.helpers.getClamped(18)};
`;

export const Partners = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(25)};
  margin-block-start: ${({ theme }) => theme.helpers.getMin(30)};
`;

export const Partner = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(36)};
  padding: ${({ theme: { helpers } }) => `${helpers.getMin(80)} ${helpers.getMin(40)}`};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  text-align: left;

  h3 {
    font-weight: bold;
    ${({ theme }) => theme.helpers.getClamped(32)};
  }

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }
`;
