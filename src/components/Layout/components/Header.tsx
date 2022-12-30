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
import { Search } from './Search';

// TODO: slices
export const Header = ({
  menuItems, i18n, pageLang,
} : HeaderProps) => {
  const langsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
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
        <Link to={pageLang === 'pl' ? '/' : `/${pageLang}`}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <NavigationNode>
          <Navigation menuItems={menuItems} />
          <ButtonsWrapper ref={searchRef}>
            <div>
              <NavButton onClick={handleSearchMenu}>
                <span className="visually-hidden">
                  search
                </span>
                <Spyglass />
              </NavButton>
              {isSearchOpen && <Search />}
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
