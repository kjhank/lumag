import styled from 'styled-components';

export const PictureNode = styled.picture<{ width: number; height: number }>`
  > img {
    width: 100%;
    height: auto;
  }
`;
