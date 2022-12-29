import styled from 'styled-components';
import { WPImage } from '@/components/WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-block-start: ${({ theme }) => theme.helpers.getMax(-120)};

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.helpers.getMin(5)};
    background-color: ${({ theme }) => theme.colors.neutral[5]};
  }
`;

export const SingleTile = styled.article`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.helpers.getMin(18)};
  padding-block: ${({ theme }) => theme.pages.homePage.tiles.tileBlockPadding};
  padding-inline: ${({ theme }) => theme.pages.homePage.tiles.tileInlinePadding};

  > * {
    position: relative;
  }

  :last-child {
    padding-block-end: ${({ theme }) => theme.helpers.getMin(80)};
  }

  :last-child:not(:nth-child(even)) {
    grid-column: -1 / 1;
    padding-inline-end: 50%;
  }
`;

export const Heading = styled.h2`
  margin-block-end: ${({ theme }) => theme.helpers.getMin(20)};
  font-weight: bold;
  ${({ theme }) => theme.pages.homePage.tiles.headingSize};
  white-space: pre-line;

  ::before {
    content: '';
    position: absolute;
    inset: auto auto 0 ${({ theme }) => theme.helpers.getMax(-20)};
    width: ${({ theme }) => theme.helpers.getMin(3)};
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.brand};
  }
`;

export const Text = styled.p`
  font-weight: 300;
  ${({ theme }) => theme.fonts.sizes.xs};
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;

  > img {
    height: 100%;
    object-fit: cover;
  }
`;
