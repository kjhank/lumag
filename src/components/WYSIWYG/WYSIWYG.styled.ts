import styled from 'styled-components';

export const Main = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h2 {
    padding-block: 1em;
    font-weight: bold;
    text-align: center;
  }

  b,
  strong {
    font-weight: bolder;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    text-decoration: underline;
  }

  img {
    width: 100%;
    height: auto;
  }

  picture,
  video {
    max-width: 100%;
  }
`;
