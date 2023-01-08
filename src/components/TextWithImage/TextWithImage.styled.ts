import styled from 'styled-components';
import { WPImage } from '../WPImage/WPImage';
import { Layout } from './TextWithImage.types';

export const Wrapper = styled.article<{ layout: Layout }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'imageLeft' ? 'row' : 'row-reverse')};
  justify-content: space-between;
`;

export const Image = styled(WPImage)`
  position: relative;
  aspect-ratio: 583/434;
  width: 50%;

  > img {
    height: 100%;
    object-fit: cover;
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: ${({ theme }) => theme.helpers.getMin(25)};
    height: ${({ theme }) => theme.helpers.getMin(25)};
    background-color: ${({ theme }) => theme.colors.neutral[5]};
    rotate: 45deg;
    translate: 50% -50% 0;
    transform-origin: center;
  }
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  padding-inline: ${({ theme }) => theme.helpers.getMin(60)};
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.xxs};
  line-height: 1.667;

  h2 {
    font-weight: bold;
    ${({ theme }) => theme.helpers.getClamped(30)};
  }
`;
