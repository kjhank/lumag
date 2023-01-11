import { Link } from 'gatsby';
import {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { Container, ExternalLink } from '@/components';
import {
  ActionBackground,
  ActionSection, Address,
  BottomNav, Copyright, LinksHeading,
  LinksList, LinksWrapper, NewsletterAgreement, NewsletterHeading,
  NewsletterInput, NewsletterSubmit, VerticalBackground,
} from '../Layout.styled';
import { FooterProps } from '../Layout.types';
import {
  Agency, Facebook, Linkedin, Logo, Twitter, Youtube,
} from '@/static';
import { useAppContext } from '@/hooks';

const icons = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

// TODO: slices
export const Footer = ({
  address, background, copyright, nav, newsletter, socials, verticalBackground,
}: FooterProps) => {
  const [email, setEmail] = useState('');
  const [isAgreed, setAgreed] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    setAgreed(current => !current);
  };

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: integration
    // eslint-disable-next-line no-alert
    alert(`email will be sent to ${event.currentTarget.elements.namedItem('email')}`);
  };

  const { urlPrefix } = useAppContext();

  return (
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

                return (
                  <li key={social.url}>
                    <ExternalLink href={social.url}>
                      <Icon />
                    </ExternalLink>
                  </li>
                );
              })}
            </LinksWrapper>
          </div>
          <form onSubmit={handleNewsletter}>
            <NewsletterHeading>
              {newsletter?.heading}
            </NewsletterHeading>
            <NewsletterInput
              onChange={handleEmailChange} placeholder={newsletter?.placeholder}
              type="email" value={email}
            />
            <NewsletterAgreement>
              <input
                checked={isAgreed} onChange={handleCheckbox}
                type="checkbox"
              />
              {newsletter?.agreement}
            </NewsletterAgreement>
            <NewsletterSubmit disabled={!isAgreed || !email} type="submit">
              {newsletter?.buttonText}
            </NewsletterSubmit>
          </form>
        </Container>
      </ActionSection>
      <BottomNav>
        <Container>
          {nav?.map(item => (
            <div key={item.heading}>
              {item.heading && <LinksHeading>{item.heading}</LinksHeading>}
              <LinksList>
                {item.subitems.map(subitem => (
                  <li key={`${subitem.slug}-${subitem.label}`}>
                    <Link to={`${urlPrefix}${subitem.slug}/`}>
                      {subitem.label || subitem.title}
                    </Link>
                  </li>
                ))}
              </LinksList>
            </div>
          ))}
        </Container>
      </BottomNav>
      <Copyright>
        <Container>
          <p>{copyright}</p>
          <a href="//gto.agency">
            <Agency />
          </a>
        </Container>
      </Copyright>
    </>
  );
};
