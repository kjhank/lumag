import styled from 'styled-components';
import { WYSIWYG } from '@/components';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-block-end: ${({ theme }) => theme.helpers.getMax(-639)};
`;

export const List = styled.ul`
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-220)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
`;

export const Map = styled.iframe.attrs({ loading: 'lazy' })`
  /* aspect-ratio: 583/645; */
  width: 100%;
  height: 100%;
`;

export const Content = styled(WYSIWYG)`
  /* width: 50%; */
  padding: ${({ theme }) => theme.helpers.getMin(64)};
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.s};

  h3 {
    padding-block-end: ${({ theme }) => theme.helpers.getMin(48)};
    font-weight: bold;
    ${({ theme }) => theme.fonts.sizes.xl};
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
  }

  b,
  strong {
    font-weight: bold;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  :nth-child(even) {
    ${Map} {
      order: 1;
    }

    ${Content} {
      order: 2;
    }
  }
`;
