import {
  useContext,
  useEffect, useRef, useState,
} from 'react';
import { Link } from 'gatsby';
import {
  Logo, Menu, Spyglass,
} from '@/static';
import {
  ButtonsWrapper,
  HeaderNode, LanguagesWrapper, LogoWrapper, NavButton, NavigationNode, NavToggle,
} from '../Layout.styled';
import { useOutsideClick } from '@/hooks';
import { HeaderProps } from '../Layout.types';
import { Navigation } from './Navigation';
import { Container } from '@/components';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Search } from './Search';
import { AppContext } from '../Layout.context';

// TODO: slices
export const Header = ({
  menuItems, i18n, pathname, search,
}: HeaderProps) => {
  const { lang: pageLang, urlPrefix } = useContext(AppContext);
  const langsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLangOpen, setLangOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const handleSearchMenu = () => {
    setSearchOpen(current => !current);
  };

  const handleLangMenu = () => {
    setLangOpen(current => !current);
  };

  const handleNav = () => {
    setNavOpen(current => !current);
  };

  useOutsideClick(langsRef, () => setLangOpen(false));
  useOutsideClick(searchRef, () => setSearchOpen(false));
  useOutsideClick(navRef, () => setNavOpen(false));

  useEffect(() => {
    setLangOpen(false);
    setNavOpen(false);
    setSearchOpen(false);
  }, [pageLang, pathname]);

  return (
    <HeaderNode>
      <Container ref={navRef}>
        <Link to={`/${urlPrefix}`}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <NavToggle onClick={handleNav}>
          <Menu />
        </NavToggle>
        <NavigationNode isOpen={isNavOpen}>
          <Navigation langPrefix={pageLang === 'pl' ? '' : `/${pageLang}`} menuItems={menuItems} />
          <ButtonsWrapper ref={searchRef}>
            <div>
              <NavButton onClick={handleSearchMenu}>
                <span className="visually-hidden">
                  search
                </span>
                <Spyglass />
              </NavButton>
              {isSearchOpen && <Search placeholder={search} />}
            </div>
            <LanguagesWrapper ref={langsRef}>
              <NavButton onClick={handleLangMenu}>
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
