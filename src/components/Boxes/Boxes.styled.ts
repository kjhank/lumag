import styled from 'styled-components';

export const BoxesList = styled.ul`
  display: grid;
  grid-template: 1fr / repeat(2, 1fr);
  gap: ${({ theme }) => theme.helpers.getMin(23)};
  margin-block-end: ${({ theme }) => theme.helpers.getMin(72)};
`;

export const Box = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(50)};
  padding: ${({ theme: { helpers } }) => `${helpers.getMin(55)} ${helpers.getMin(45)}`};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
`;

export const BoxHeading = styled.h3`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 700;
  ${({ theme }) => theme.fonts.sizes.xl};
  text-align: center;
`;

export const BoxContent = styled.p`
  ${({ theme }) => theme.helpers.getClamped(16)};
  text-align: justify;
`;
