import styled from 'styled-components';

export const Heading = styled.h3`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
`;

export const Declarations = styled.ol`
  counter-reset: item;
  ${({ theme }) => theme.fonts.sizes.xs};

  > li {
    counter-increment: item;
    display: flex;
    align-items: flex-start;
    gap: 1ex;

    &::before {
      content: '' counter(item) ') ';
      color: ${({ theme }) => theme.colors.brand};
      font-weight: bold;
    }
  }
`;

export const Footnotes = styled.p`
  ${({ theme }) => theme.fonts.sizes.xs};
  margin-block: ${({ theme: { helpers: { getMin, getMax } } }) => `${getMin(83)} ${getMax(-70)}`};
`;
