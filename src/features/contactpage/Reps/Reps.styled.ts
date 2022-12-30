import styled, { css } from 'styled-components';
import { WPImage } from '@/components';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding-block-start: ${({ theme }) => theme.helpers.getMin(639)};
  padding-block-end: ${({ theme }) => theme.helpers.getMin(104)};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 300;
  ${({ theme }) => theme.helpers.getClamped(22.5)};

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Heading = styled.h2`
  align-self: center;
  margin-block: ${({ theme }) => theme.helpers.getMin(132)};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
  text-align: center;
`;

export const Regions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(32)};
`;

export const Region = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: ${({ theme }) => `${theme.helpers.getMin(1)} solid ${theme.colors.brand}`};

  > div {
    border: inherit;
    padding: ${({ theme }) => `${theme.helpers.getMin(32)} ${theme.helpers.getMin(64)}`};
    text-align: center;
  }
`;

export const ContactSplitter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: ${({ theme }) => theme.helpers.getMin(32)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const RegionName = styled.h3`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
`;

export const Phones = styled.ul``;

export const Emails = styled.ul`
  color: ${({ theme }) => theme.colors.brand};
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
