/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components';
import { WPImage } from '../WPImage/WPImage';

export const HeaderNode = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.neutral[5]};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoWrapper = styled.h1`
  width: ${({ theme }) => theme.helpers.getMin(159)};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: min(131px, 18vw);
      padding-block: 13%;
    }
  `}
`;

export const NavigationNode = styled.nav<{ isOpen?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.global.header.linkGap};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 400;
  ${({ theme }) => theme.fonts.sizes.xs};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  text-transform: uppercase;

  > menu {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        width: 100%;
        background-color: ${theme.colors.neutral[5]};
        flex-direction: column;
        gap: 1em;

        a {
          text-transform: none;
        }
      }
    `}
  }
  ${({ theme, isOpen }) => css`
    ${theme.mediaQueries.s} {
      position: absolute;
      inset: 0 0 auto;
      flex-direction: column;
      padding-block-end: 5%;
      background-color: ${theme.colors.neutral[5]};
      ${theme.fonts.sizes.m};
      translate: ${isOpen ? '0 min(71px, 9.467vw) 0' : '100vw min(71px, 9.467vw) 0'};
      transition: translate ${theme.transitions.default};
    }
  `}
`;

export const NavToggle = styled.button.attrs({ type: 'button' })`
  display: none;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      display: grid;
      place-items: center;
      width: min(50px, 6.667vw);
      aspect-ratio: 1;
      background-color: transparent;
      padding: 0;

      > svg {
        width: 80%;
        height: auto;
      }
    }
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.global.header.buttonsGap};
  color: ${({ theme }) => theme.colors.neutral[5]};
  ${({ theme }) => theme.fonts.sizes.xxs};
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      ${theme.fonts.sizes.m};
    }
  `}
`;

export const NavButton = styled.button.attrs({ type: 'button' })`
  position: relative;
  display: grid;
  place-items: center;
  width: ${({ theme }) => theme.global.header.buttonSize};
  height: ${({ theme }) => theme.global.header.buttonSize};
  border-radius: ${({ theme }) => theme.global.header.buttonSize};
  background-color: ${({ theme }) => theme.colors.brand};
  color: inherit;
  cursor: pointer;

  > svg {
    width: 1em;
    height: auto;
    /* stylelint-disable-next-line value-keyword-case */
    fill: currentColor;
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: min(50px, 6.667vw);
      height: min(50px, 6.667vw);
      border-radius: 50%;
    }
  `}
`;

export const LanguageMenu = styled.menu`
  position: absolute;
  inset: 50% 0 auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: ${({ theme }) => theme.global.header.buttonSize};
  border-radius: ${({ theme }) => theme.global.header.buttonSize};
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  padding-block: 1.5em 1em;
  background-color: ${({ theme }) => theme.colors.brand};
  list-style-type: none;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: min(50px, 6.667vw);
      border-radius: 100px;
      border-start-start-radius: 0;
      border-start-end-radius: 0;
    }
  `}
`;

export const LanguagesWrapper = styled.nav`
  position: relative;
  z-index: 1;

  > button {
    z-index: 3;
    text-transform: uppercase;
  }

  > ${LanguageMenu} {
    z-index: 2;
  }
`;

export const NavLabel = styled.p`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5em;
  white-space: nowrap;

  > svg {
    width: 0.75em;
    height: auto;
    /* stylelint-disable-next-line value-keyword-case */
    stroke: currentColor;
    /* stylelint-disable-next-line value-keyword-case */
    fill: currentColor;
    transition: ${({ theme }) => `color ${theme.transitions.fast}`};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        display: none;
      }
    `}
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      display: block;
      text-align: center;
    }
  `}
`;

export const Submenu = styled.menu`
  position: absolute;
  inset: 100% auto auto 0;
  z-index: 0;
  filter: opacity(0);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.global.header.linkGap};
  padding-block: ${({ theme }) => theme.global.header.paddingBlock};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  white-space: nowrap;
  transition: ${({ theme }) => `background-color ${theme.transitions.fast}, filter ${theme.transitions.fast}`};
  pointer-events: none;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      position: static;
      filter: unset;
      pointer-events: all;
      white-space: normal;
    }
  `}
`;

export const Subitem = styled.li`
  padding-inline: ${({ theme }) => theme.global.header.paddingInline};
  list-style: none;
  color: ${({ theme }) => theme.colors.neutral[100]};
  text-transform: none;
  transition: ${({ theme }) => `color ${theme.transitions.fast}`};

  :hover {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const NavItem = styled.li`
  position: relative;
  list-style: none;
  letter-spacing: 2px;
  transition: ${({ theme }) => `background-color ${theme.transitions.fast}, color ${theme.transitions.fast}`};

  > a {
    display: block;
  }

  > a,
  > p {
    padding-block: ${({ theme }) => theme.global.header.paddingBlock};
    padding-inline: ${({ theme }) => theme.global.header.paddingInline};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.neutral[17]};

    svg {
      color: ${({ theme }) => theme.colors.brand};
    }

    ${Submenu} {
      filter: opacity(1);
      background-color: ${({ theme }) => theme.colors.neutral[17]};
      pointer-events: all;
    }
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      width: 75%;
    }
  `}
`;

export const ActionSection = styled.section`
  position: relative;
  z-index: 4;
  font-family: ${({ theme }) => theme.fonts.types.alt};

  > div {
    display: flex;
    align-items: center;

    > div,
    > form {
      position: relative;
      display: flex;
      flex: 50%;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.helpers.getMin(30)};
      padding-block-start: ${({ theme }) => theme.helpers.getMin(71)};

      > article {
        position: absolute;

        > button {
          width: ${({ theme }) => theme.helpers.getMin(24)};
          height: ${({ theme }) => theme.helpers.getMin(24)};
        }
      }

      > svg {
        width: ${({ theme }) => theme.helpers.getMin(249)};
        margin-block-end: ${({ theme }) => theme.helpers.getMin(20)};
        ${({ theme }) => css`
          ${theme.mediaQueries.s} {
            width: 48%;
          }
        `}
      }

      :last-child {
        padding-block-end: ${({ theme }) => theme.helpers.getMin(18)};
        padding-inline: ${({ theme }) => theme.helpers.getMin(61)};
        ${({ theme }) => theme.global.contact.newsletterFontSize};
      }
    }
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
      }
    `}
  }
`;

export const Address = styled.address`
  ${({ theme }) => theme.global.contact.addressFontSize};
  text-align: center;
  white-space: pre-line;

  ::first-line {
    font-weight: 900;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getMin(7)};

  > li {
    list-style: none;

    > a {
      display: grid;
      place-items: center;
      width: ${({ theme }) => theme.global.contact.socialsLinkSize};
      height: auto;
      border-radius: 50%;
      ${({ theme }) => css`
        ${theme.mediaQueries.s} {
          width: min(35px, 10vw);
        }
      `}

      > svg {
        fill: ${({ theme }) => theme.colors.neutral[100]};
      }
    }
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block-end: 10%;
    }
  `}
`;

export const NewsletterHeading = styled.h2`
  font-weight: 900;
  ${({ theme }) => theme.global.contact.newsletterHeadingSize};
  text-align: center;
`;

export const NewsletterInput = styled.input`
  width: 50%;
  border: ${({ theme }) => `${theme.helpers.getMin(1)} solid ${theme.colors.neutral[100]}`};
  border-radius: 100vw;
  background-color: transparent;
  ${({ theme }) => theme.global.contact.newsletterFontSize};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  line-height: ${({ theme }) => theme.helpers.getMin(60)};
  text-align: center;

  ::placeholder {
    color: inherit;
  }
`;

export const NewsletterAgreement = styled.label`
  display: flex;
  align-items: baseline;
  gap: 1em;
`;

export const NewsletterSubmit = styled.button`
  border-radius: 100vw;
  padding-inline: ${({ theme }) => theme.helpers.getMin(35)};
  background-color: ${({ theme }) => theme.global.contact.newsletterSubmitBackgroundColor};
  color: ${({ theme }) => theme.global.contact.newsletterSubmitColor};
  font-weight: 300;
  ${({ theme }) => theme.global.contact.newsletterSubmitFontSize};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  line-height: ${({ theme }) => theme.global.contact.newsletterSubmitLineHeight};
  text-transform: uppercase;
  cursor: pointer;

  :disabled {
    filter: contrast(50%);
    cursor: not-allowed;
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      padding-block: 0.5em;
    }
  `}
`;

export const BottomNav = styled.nav`
  position: relative;
  z-index: 5;
  background-color: ${({ theme }) => theme.global.footer.backgroundColor};
  padding-block: ${({ theme }) => theme.helpers.getMin(60)};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > div {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.global.footer.linkGap};
      padding-inline: ${({ theme }) => theme.helpers.getMin(62)};

      :nth-child(2) {
        border-inline: ${({ theme }) => `${theme.helpers.getMin(2)} solid ${theme.colors.neutral[30]}`};
      }
    }
  }
`;

export const LinksList = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.global.footer.linkGap};
  list-style-type: none;

  a {
    color: ${({ theme }) => theme.global.footer.linkColor};
  }
`;

export const LinkItem = styled.li<{ isBold: boolean }>`
  font-weight: ${({ isBold }) => isBold && 'bold'};
`;

export const LinksHeading = styled.h3`
  color: ${({ theme }) => theme.global.footer.heading};
`;

export const Copyright = styled.footer`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.global.footer.bannerGap};
    padding: ${({ theme }) => theme.global.footer.bannerPaddingBlock};
    ${({ theme }) => theme.global.footer.bannerFontSize};

    svg {
      width: auto;
      height: ${({ theme }) => theme.global.footer.bannerLogoHeight};
    }
  }
`;

export const ActionBackground = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: 0;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      display: none;
    }
  `}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VerticalBackground = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: 0;
  display: none;
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      display: block;
    }
  `}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CookiesDialog = styled.aside<{ isVisible?: boolean }>`
  position: fixed;
  inset: auto 0 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  padding-block: ${({ theme }) => theme.helpers.getMin(8)};
  ${({ theme }) => theme.fonts.sizes.xs};
  text-align: center;
  transition: ${({ theme }) => `translate ${theme.transitions.default}`};
  translate: ${({ isVisible }) => (isVisible ? 0 : '0 100% 0')};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.helpers.getMin(45)};
  }

  a {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const SearchNode = styled.aside`
  position: absolute;
  z-index: 10;
  inset: 0 0 0 50%;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  translate: -50% 0 0;

  ::after {
    content: '';
    position: absolute;
    inset: 0 auto 0 100%;
    width: 50vw;
    background-color: ${({ theme }) => theme.colors.neutral[5]};
    ${({ theme }) => css`
      ${theme.mediaQueries.s} {
        content: none;
      }
    `}
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      inset: 100% 10% auto;
      translate: 0;
    }
  `}
`;

export const SearchForm = styled.form`
  width: 100%;
  ${({ theme }) => theme.helpers.getClamped(16)};
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  padding-inline: ${({ theme }) => theme.helpers.getMin(32)};
  background-color: ${({ theme }) => theme.colors.neutral[15]};
  line-height: 2;
  text-transform: uppercase;

  :focus {
    outline-color: ${({ theme }) => theme.colors.brand};
  }
  ${({ theme }) => css`
    ${theme.mediaQueries.s} {
      line-height: 3;
      padding-inline: min(40px, 5.33vw);
    }
  `}
`;

export const SearchButton = styled.button`
  position: absolute;
  inset: ${({ type }) => (type === 'button' ? '50% 0.25em auto auto' : '50% auto auto 0.25em')};
  width: 1em;
  height: 1em;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral[100]};
  translate: 0 -50% 0;

  svg {
    /* stylelint-disable-next-line value-keyword-case */
    fill: currentColor;
  }
  ${({ theme, type }) => css`
    ${theme.mediaQueries.s} {
    inset: ${type === 'button' ? '50% 1em auto auto' : '50% auto auto 1em'};
    }
  `}
`;

export const ResultsWrapper = styled.section`
  position: absolute;
  inset: 100% 0 auto;
  padding: 2.5%;
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const SearchResults = styled.ul`
  > li {
    list-style-type: none;

    + li {
      border-block-start: ${({ theme }) => `1px solid ${theme.colors.neutral[25]}`};
    }

    > a {
      display: block;
      padding: 0.5em;
    }
  }
`;
