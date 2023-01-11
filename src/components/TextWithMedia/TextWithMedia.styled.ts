/* stylelint-disable no-descending-specificity */
/* stylelint-disable declaration-colon-newline-after */
import styled, { css } from 'styled-components';
import { WPImage } from '../WPImage/WPImage';
import { Layout } from './TextWithMedia.types';

export const Wrapper = styled.article<{ backgroundIndex: number; layout: Layout }>`
  display: flex;
  flex-direction: ${({ layout }) => (layout !== 'alternating' && layout !== 'alternating-reverse' && layout === 'imageLeft' ? 'row' : 'row-reverse')};
  justify-content: space-between;
  background-color: ${({ backgroundIndex, theme }) => theme.colors.neutral[backgroundIndex]};
  ${({ layout }) => (layout === 'alternating' || layout === 'alternating-reverse') && css`
    :nth-child(odd) {
      flex-direction: ${layout === 'alternating' ? 'row' : 'row-reverse'};

      div,
      picture {
        ::after {
          ${layout === 'alternating' && css`
            right: 0;
            left: auto;
            translate: 50% -50% 0;
          `};

          ${layout === 'alternating-reverse' && css`
            right: auto;
            left: 0;
            translate: -50% -50% 0;
          `};
        }
      }
    }
    :nth-child(even) {
      flex-direction: ${layout === 'alternating' ? 'row-reverse' : 'row'};

      div,
      picture {
        ::after {
          ${layout === 'alternating' && css`
            right: auto;
            left: 0;
            translate: -50% -50% 0;
          `};
          ${layout === 'alternating-reverse' && css`
            right: 0;
            left: auto;
            translate: 50% -50% 0;
          `};
        }
      }
    }
  `};

  div,
  picture {
    ::before,
    ::after {
      background-color: ${({ backgroundIndex, theme }) => theme.colors.neutral[backgroundIndex]};
    }
  }
`;

export const mediaStyles = css<{ decorationOn: Layout }>`
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
    right: ${({ decorationOn }) => (decorationOn === 'imageRight' ? 'auto' : 0)};
    left: ${({ decorationOn }) => (decorationOn === 'imageLeft' ? 'auto' : 0)};
    width: ${({ theme }) => theme.helpers.getMin(25)};
    height: ${({ theme }) => theme.helpers.getMin(25)};
    rotate: 45deg;
    translate: ${({ decorationOn }) => `${decorationOn === 'imageLeft' ? '50%' : '-50%'} -50% 0`};
    transform-origin: center;
  }
`;

export const Image = styled(WPImage)`
  ${mediaStyles}
`;

export const VideoWrapper = styled.div`
  ${mediaStyles}

  > video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.section<{ fontSize: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  padding-inline: ${({ theme }) => theme.helpers.getMin(60)};
  font-weight: 300;
  ${({ fontSize, theme }) => theme.helpers.getClamped(fontSize)};
  line-height: 1.667;

  h2 {
    font-weight: bold;
    ${({ theme }) => theme.helpers.getClamped(30)};
    text-align: center;
  }
`;
