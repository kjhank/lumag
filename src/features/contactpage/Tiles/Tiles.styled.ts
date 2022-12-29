import styled from 'styled-components';

export const Section = styled.section`
  padding-block-start: ${({ theme }) => theme.helpers.getMin(71)};

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.helpers.getMin(20)};
  }
`;

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(20)};
  padding-block: ${({ theme }) => theme.helpers.getMin(47)};
  padding-inline: ${({ theme }) => theme.helpers.getMin(57)};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  ${({ theme }) => theme.helpers.getClamped(18)};
  text-align: center;

  h3 {
    padding-block-end: ${({ theme }) => theme.helpers.getMin(25)};
    color: ${({ theme }) => theme.colors.brand};
    font-weight: bold;
    ${({ theme }) => theme.fonts.sizes.xl};
  }

  :last-child:nth-child(odd) {
    grid-column: -1/1;
  }

  a.link-email {
    border: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.neutral[100]}`};
    background-color: transparent;
  }

  a:not([href]) {
    filter: contrast(0.25) opacity(0.75);
    cursor: not-allowed;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(56)};

    > li {
      display: flex;
      align-items: center;

      > svg {
        width: 1.5em;
        fill: ${({ theme }) => theme.colors.brand};
      }
    }
  }
`;
