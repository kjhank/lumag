/* stylelint-disable no-descending-specificity */
import styled from 'styled-components';
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
`;

export const NavigationNode = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.global.header.linkGap};
  background-color: ${({ theme }) => theme.colors.neutral[5]};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  text-transform: uppercase;

  > menu {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.global.header.buttonsGap};
  color: ${({ theme }) => theme.colors.neutral[5]};
  font-size: ${({ theme }) => theme.fonts.sizes.xxs};
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
  }
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
`;

export const ActionSection = styled.section`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.types.alt};

  > div {
    display: flex;
    align-items: center;

    > div,
    > form {
      display: flex;
      flex: 50%;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.helpers.getMin(30)};
      padding-block-start: ${({ theme }) => theme.helpers.getMin(71)};

      > svg {
        width: ${({ theme }) => theme.helpers.getMin(249)};
        margin-bottom: ${({ theme }) => theme.helpers.getMin(20)};
      }

      :last-child {
        padding-block-end: ${({ theme }) => theme.helpers.getMin(18)};
        padding-inline: ${({ theme }) => theme.helpers.getMin(61)};
        font-size: ${({ theme }) => theme.global.contact.newsletterFontSize};
      }
    }
  }
`;

export const Address = styled.address`
  font-size: ${({ theme }) => theme.global.contact.addressFontSize};
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

      > svg {
        fill: ${({ theme }) => theme.colors.neutral[100]};
      }
    }
  }
`;

export const NewsletterHeading = styled.h2`
  font-weight: 900;
  font-size: ${({ theme }) => theme.global.contact.newsletterHeadingSize};
`;

export const NewsletterInput = styled.input`
  width: 50%;
  border: ${({ theme }) => `${theme.helpers.getMin(1)} solid ${theme.colors.neutral[100]}`};
  border-radius: 100vw;
  background-color: transparent;
  font-size: ${({ theme }) => theme.global.contact.newsletterFontSize};
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
  font-size: ${({ theme }) => theme.global.contact.newsletterSubmitFontSize};
  font-family: ${({ theme }) => theme.fonts.types.alt};
  line-height: ${({ theme }) => theme.global.contact.newsletterSubmitLineHeight};
  text-transform: uppercase;
  cursor: pointer;

  :disabled {
    filter: contrast(50%);
    cursor: not-allowed;
  }
`;

export const BottomNav = styled.nav`
  background-color: ${({ theme }) => theme.global.footer.backgroundColor};
  padding-block: ${({ theme }) => theme.helpers.getMin(60)};

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
    font-size: ${({ theme }) => theme.global.footer.bannerFontSize};

    > svg {
      width: auto;
      height: ${({ theme }) => theme.global.footer.bannerLogoHeight};
    }
  }
`;

export const ActionBackground = styled(WPImage)`
  position: absolute;
  inset: 0;
  z-index: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
