import { Link } from 'gatsby';
import { ArrowDown } from '@/static';
import {
  NavItem, NavLabel, Subitem, Submenu,
} from '../Layout.styled';
import { NavigationProps } from '../Layout.types';

export const Navigation = ({ menuItems }: NavigationProps) => (
  <menu>
    {menuItems?.length > 0 && menuItems.map(item => (
      <NavItem key={item.label}>
        {item.itemType === 'page'
          ? <Link to={`/${item.page.slug}`}>{item.label}</Link>
          : (
            <>
              <NavLabel>
                {item.label}
                {' '}
                <ArrowDown />
              </NavLabel>
              <Submenu>
                {item.submenu.map(subitem => (
                  <Subitem key={subitem.label ?? subitem.page.title}>
                    <Link to={`/${subitem.page.slug}`}>{subitem.page.title}</Link>
                  </Subitem>
                ))}
              </Submenu>
            </>
          )}
      </NavItem>
    ))}
  </menu>
);
