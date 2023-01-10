/* stylelint-disable declaration-colon-newline-after */
import styled, { css } from 'styled-components';
import { WPImage } from '../WPImage/WPImage';
import { Layout } from './TextWithMedia.types';

export const Wrapper = styled.article<{ layout: Layout }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout !== 'alternating' && layout === 'imageLeft' ? 'row' : 'row-reverse')};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral[17]};
  ${({ layout }) => layout === 'alternating' && css`
    :nth-child(odd) {
      flex-direction: row;
    }
    :nth-child(even) {
      flex-direction: row-reverse;
    }
  `};
`;

export const mediaStyles = css<{ decorationOn: 'left' | 'right' }>`
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
    right: ${({ decorationOn }) => (decorationOn === 'right' ? 0 : 'auto')};
    left: ${({ decorationOn }) => (decorationOn === 'left' ? 0 : 'auto')};
    width: ${({ theme }) => theme.helpers.getMin(25)};
    height: ${({ theme }) => theme.helpers.getMin(25)};
    background-color: ${({ theme }) => theme.colors.neutral[5]};
    rotate: 45deg;
    translate: ${({ decorationOn }) => `${decorationOn === 'left' ? '-50%' : '50%'} -50% 0`};
    transform-origin: center;
  }
`;

export const Image = styled(WPImage) <{ decorationOn: 'left' | 'right' }>`
  ${mediaStyles}
`;

export const VideoWrapper = styled.div<{ decorationOn: 'left' | 'right' }>`
  ${mediaStyles}

  > video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
