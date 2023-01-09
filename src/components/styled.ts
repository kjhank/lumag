import styled from 'styled-components';

export const NewsDate = styled.time`
  display: inline-flex;
  align-items: center;
  gap: 1ex;
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 300;

  > svg {
    width: 1em;
    height: auto;
    /* stylelint-disable-next-line value-keyword-case */
    fill: currentColor;
  }
`;

export const SectionHeading = styled.h2`
  color: ${({ theme: { colors } }) => colors.brand};
  font-weight: bold;
  ${({ theme }) => theme.fonts.sizes.xl};
  text-align: center;
`;
