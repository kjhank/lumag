import styled from 'styled-components';
import { WPImage } from '../WPImage/WPImage';

export const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => theme.helpers.getMin(75)};
  ${({ theme }) => theme.helpers.getClamped(18)};
  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(25)};
  }
`;

export const Background = styled(WPImage)`
  position: absolute;
  inset: 0;
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
`;

export const Text = styled.p`
  margin-block-end: ${({ theme }) => theme.helpers.getMin(25)};
  padding-inline: 7.5%;
  font-weight: 300;
`;

export const Image = styled(WPImage)`
  filter: ${({ theme: { colors, helpers } }) => `drop-shadow(${helpers.getMin(13)} ${helpers.getMin(20)} ${helpers.getMin(30)} ${colors.neutral[30]}74)`};
  width: ${({ theme }) => theme.helpers.getMin(231)};
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(35)};
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
`;
