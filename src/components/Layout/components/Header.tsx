import { useRef, useState } from 'react';
import { Link } from 'gatsby';
import { Logo, Spyglass } from '@/static';
import {
  ButtonsWrapper,
  HeaderNode, LanguagesWrapper, LogoWrapper, NavButton, NavigationNode,
} from '../Layout.styled';
import { useOutsideClick } from '@/hooks';
import { HeaderProps } from '../Layout.types';
import { Navigation } from './Navigation';
import { Container } from '@/components';
import { LanguageSwitcher } from './LanguageSwitcher';

// TODO: slices
export const Header = ({
  menuItems, i18n, pageLang,
} : HeaderProps) => {
  const langsRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLButtonElement>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);

  const handleSearchMenu = () => {
    setSearchOpen(current => !current);
  };

  const handleLangMenu = () => {
    setLangOpen(current => !current);
  };

  useOutsideClick(langsRef, () => setLangOpen(false));
  useOutsideClick(searchRef, () => setSearchOpen(false));

  return (
    <HeaderNode>
      <Container>
        <Link to={`/${pageLang}`}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <NavigationNode>
          <Navigation menuItems={menuItems} />
          <ButtonsWrapper>
            <NavButton onClick={handleSearchMenu} ref={searchRef}>
              <span className="visually-hidden">
                search
              </span>
              <Spyglass />
            </NavButton>
            <LanguagesWrapper>
              <NavButton onClick={handleLangMenu} ref={langsRef}>
                <span className="visually-hidden">
                  lang
                </span>
                {pageLang}
              </NavButton>
              {isLangOpen && <LanguageSwitcher i18n={i18n} pageLang={pageLang} />}
            </LanguagesWrapper>
          </ButtonsWrapper>
        </NavigationNode>
      </Container>
    </HeaderNode>
  );
};
