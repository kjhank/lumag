import { Link } from 'gatsby';
import { ArrowDown } from '@/static';
import {
  NavItem, NavLabel, Subitem, Submenu,
} from '../Layout.styled';
import { NavigationProps } from '../Layout.types';

export const Navigation = ({ menuItems, langPrefix }: NavigationProps) => (
  <menu>
    {menuItems?.length > 0 && menuItems.map(item => (
      <NavItem key={item.label || item.page?.title}>
        {item.page
          ? <Link to={`${langPrefix}/${item.page.slug}`}>{item.label || item.page.title}</Link>
          : (
            <>
              <NavLabel>
                {item.label}
                {' '}
                <ArrowDown />
              </NavLabel>
              <Submenu>
                {item?.submenu?.map(subitem => (
                  <Subitem key={subitem.label || subitem.page.title}>
                    <Link to={`${langPrefix}/${subitem.page.slug}`}>{subitem.label || subitem.page.title}</Link>
                  </Subitem>
                ))}
              </Submenu>
            </>
          )}
      </NavItem>
    ))}
  </menu>
);
