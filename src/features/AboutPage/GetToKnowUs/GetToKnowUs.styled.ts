import styled from 'styled-components';

export const Section = styled.section`
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-200)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(120)};

  > div {
    padding-inline: ${({ theme }) => theme.helpers.getMin(75)};
  }
`;

export const VideoWrapper = styled.div`
  margin-block-start: ${({ theme }) => theme.helpers.getMin(55)};
`;

export const Player = styled.video`
  width: 100%;
  max-width: 100%;
  margin-block-end: ${({ theme }) => theme.helpers.getMin(72)};
`;
