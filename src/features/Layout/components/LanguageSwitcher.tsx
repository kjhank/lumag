import { Link } from 'gatsby';
import { Languages } from '@/types';
import { LanguageMenu } from '../Layout.styled';
import { LanguageSwitcherProps } from '../Layout.types';

export const LanguageSwitcher = ({ i18n, pageLang }: LanguageSwitcherProps) => (
  <LanguageMenu>
    {Object.keys(i18n.slugs).map(key => (key === pageLang
      ? null
      : (
        <li key={key}>
          <Link to={i18n.slugs[key as Languages]}>{key}</Link>
        </li>
      )))}
  </LanguageMenu>
);
