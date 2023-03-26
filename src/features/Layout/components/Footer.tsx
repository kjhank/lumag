import { Link } from 'gatsby';
import { Container, ExternalLink } from '@/components';
import {
  ActionBackground,
  ActionSection, Address,
  BottomNav, Copyright, LinkItem, LinksHeading,
  LinksList, LinksWrapper, VerticalBackground,
} from '../Layout.styled';
import { FooterProps } from '../Layout.types';
import {
  Agency, Facebook, Linkedin, Logo, Twitter, Youtube,
} from '@/static';
import { useApiLinks } from '@/hooks';
import { FooterSubmenu } from '@/types';
import { Newsletter } from './Newsletter';

const icons = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

const RenderLink = ({ item }: { item: FooterSubmenu }) => {
  const parsedUrl = useApiLinks(item.page.url);

  return (
    <LinkItem isBold={item.isBold}>
      {parsedUrl.includes('http')
        ? (
          <a href={parsedUrl}>
            {item.label || item.title}
          </a>
        )
        : (
          <Link to={parsedUrl}>
            {item.label || item.title}
          </Link>
        )}
    </LinkItem>
  );
};

// TODO: slices
export const Footer = ({
  address, background, copyright, nav, newsletter, socials, verticalBackground,
}: FooterProps) => (
  <>
    <ActionSection>
      <ActionBackground imageData={background} />
      {verticalBackground && <VerticalBackground imageData={verticalBackground} />}
      <Container>
        <div>
          <Logo />
          <Address>
            {address}
          </Address>
          <LinksWrapper>
            {socials?.map(social => {
              const Icon = icons[social.iconSlug as keyof typeof icons];
              const linkHostname = new URL(social.url).hostname;
              const linkTitle = linkHostname.startsWith('www.') ? linkHostname.substring(4) : linkHostname;

              return (
                <li key={social.url}>
                  <ExternalLink href={social.url}>
                    <Icon title={linkTitle} />
                  </ExternalLink>
                </li>
              );
            })}
          </LinksWrapper>
        </div>
        <Newsletter data={newsletter} />
      </Container>
    </ActionSection>
    <BottomNav>
      <Container>
        {nav?.map(item => (
          <div key={item.heading}>
            {item.heading && <LinksHeading>{item.heading}</LinksHeading>}
            <LinksList>
              {item.subitems.map(subitem => (
                <RenderLink item={subitem} key={subitem.title} />
              ))}
            </LinksList>
          </div>
        ))}
      </Container>
    </BottomNav>
    <Copyright>
      <Container>
        <p>{copyright}</p>
        <a
          href="//gto.agency" rel="noreferrer"
          target="_blank"
        >
          <Agency title="GTO agency" />
        </a>
      </Container>
    </Copyright>
  </>
);
