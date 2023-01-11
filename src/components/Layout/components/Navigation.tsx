import { Link } from 'gatsby';
import { ArrowDown } from '@/static';
import {
  NavItem, NavLabel, Subitem, Submenu,
} from '../Layout.styled';
import { NavigationProps } from '../Layout.types';
import { useAppContext } from '@/hooks';

export const Navigation = ({ menuItems }: NavigationProps) => {
  const { urlPrefix } = useAppContext();

  return (
    <menu>
      {menuItems?.length > 0 && menuItems.map(item => (
        <NavItem key={item.label || item.page?.title}>
          {item.page
            ? <Link to={`${urlPrefix}${item.page.slug}`}>{item.label || item.page.title}</Link>
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
                      <Link to={`${urlPrefix}${subitem.page.slug}`}>{subitem.label || subitem.page.title}</Link>
                    </Subitem>
                  ))}
                </Submenu>
              </>
            )}
        </NavItem>
      ))}
    </menu>
  );
};
