import styled from 'styled-components';
import { getMin } from '../../../theme/helpers';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-top: ${() => getMin(-120)};

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${() => getMin(5)};
    background-color: ${({ theme }) => theme.colors.neutral[5]};
  }
`;

export const SingleTile = styled.article`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${() => getMin(18)};
  padding-block: ${({ theme }) => theme.pages.homePage.tiles.tileBlockPadding};
  padding-inline: ${({ theme }) => theme.pages.homePage.tiles.tileInlinePadding};

  > * {
    position: relative;
  }

  :last-child:not(:nth-child(even)) {
    grid-column: -1 / 1;
    padding-inline-end: 50%;
  }
`;

export const Heading = styled.h2`
  margin-bottom: ${() => getMin(20)};
  font-weight: bold;
  font-size: ${({ theme }) => theme.pages.homePage.tiles.headingSize};
  white-space: pre-line;

  ::before {
    content: '';
    position: absolute;
    inset: auto auto 0 ${() => getMin(-20)};
    width: ${() => getMin(3)};
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.brand};
  }
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;

  > img {
    height: 100%;
    object-fit: cover;
  }
`;
