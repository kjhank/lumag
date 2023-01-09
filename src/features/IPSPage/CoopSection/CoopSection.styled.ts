import styled from 'styled-components';
import { WPImage } from '@/components';

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => theme.helpers.getMin(75)};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(83)};
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: bold;
  ${({ theme: { helpers } }) => helpers.getClamped(22)};
  line-height: 1.68;
  text-align: center;
`;
