import styled from 'styled-components';

export const Wrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.helpers.getMin(13)};
`;

export const Item = styled.li<{ isExpanded: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral[15]};

  > article {
    grid-template-rows: ${({ isExpanded }) => `${(isExpanded ? 1 : 0)}fr`};
    padding-block: ${({ isExpanded, theme }) => (isExpanded ? theme.helpers.getMin(60) : 0)};
  }

  > button > svg {
    height: 0.36em;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
    transform: ${({ isExpanded }) => (isExpanded ? 'rotateX(0deg) rotateZ(90deg)' : 'rotateX(180deg) rotateZ(90deg)')};
  }
`;

export const Toggle = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme: { helpers } }) => `${helpers.getMin(30)} ${helpers.getMin(71)}`};
  background-color: transparent;
  color: inherit;
  font-weight: 700;
  ${({ theme }) => theme.helpers.getClamped(36)};
  text-align: start;
  cursor: pointer;

  /* stylelint-disable-next-line no-descending-specificity */
  > svg {
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 2px;
  }
`;

export const Content = styled.article`
  display: grid;
  padding: ${({ theme: { helpers } }) => `${helpers.getMin(30)} ${helpers.getMin(71)}`};
  transition: grid-template-rows ${({ theme }) => theme.transitions.default}, padding-block-start ${({ theme }) => theme.transitions.default};

  > * {
    overflow: hidden;
  }
`;
