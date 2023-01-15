/* stylelint-disable selector-type-no-unknown */
/* stylelint-disable selector-max-empty-lines */
import styled, { css } from 'styled-components';
import { WYSIWYG } from '@/components';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-block-end: ${({ theme }) => theme.helpers.getMax(-639)};
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-220)};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
`;

export const Map = styled.iframe.attrs({ loading: 'lazy' })`
  width: 100%;
  height: 100%;

  :nth-child(4) {
    display: flex;
    order: 3;
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      aspect-ratio: 750/570;
    }
  `}
`;

export const Content = styled(WYSIWYG)`
  justify-content: center;
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

  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-inline: 10%;
    }
  `}

  :nth-child(3) {
    order: 4;
  }
`;

// export const Item = styled.li`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);

//   :nth-child(even) {
//     ${Map} {
//       order: 1;
//       ${({ theme }) => css`
//         ${theme.mediaQueries.s} {
//           order: unset;
//         }
//       `}
//     }

//     ${Content} {
//       order: 2;
//       ${({ theme }) => css`
//         ${theme.mediaQueries.s} {
//           order: unset;
//         }
//       `}
//     }
//   }
//   ${({ theme }) => css`
//     ${theme.mediaQueries.s} {
//       grid-template-columns: 1fr;
//     }
//   `}
// `;
