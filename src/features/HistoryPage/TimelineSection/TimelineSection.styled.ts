import styled from 'styled-components';

export const Section = styled.section`
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-220)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(40)};
    padding-block: ${({ theme }) => theme.helpers.getMin(50)};
    background-image: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.neutral[15]}, ${theme.colors.neutral[5]})`};
  }

  h2 {
    color: ${({ theme }) => theme.colors.neutral[100]};
    word-break: break-word;
    padding-inline: 5%;
  }
`;

export const Text = styled.p`
  padding-inline: 20%;
  ${({ theme }) => theme.fonts.sizes.s};
  font-family: 'Avenir Book', sans-serif;
  text-align: center;
`;
