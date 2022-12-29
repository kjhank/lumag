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
  NewsletterInput, NewsletterSubmit,
} from '../Layout.styled';
import { FooterProps } from '../Layout.types';
import {
  Agency, Facebook, Linkedin, Logo, Twitter, Youtube,
} from '@/static';

const icons = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

// TODO: slices
export const Footer = ({
  address, background, copyright, nav, newsletter, socials,
}: FooterProps) => {
  const [email, setEmail] = useState('');
  const [isAgreed, setAgreed] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    setAgreed(current => !current);
  };

  const handleNewsletter = (event: FormEvent) => {
    event.preventDefault();
    // TODO: integration
    // eslint-disable-next-line no-alert
    alert(`email will be sent to ${event.target[0].value}`);
  };

  return (
    <>
      <ActionSection>
        <ActionBackground imageData={background} />
        <Container>
          <div>
            <Logo />
            <Address>
              {address}
            </Address>
            <LinksWrapper>
              {socials?.map(social => {
                const Icon = icons[social.iconSlug];

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
                    <Link to={`/${subitem.slug}/`}>
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
          <Agency />
        </Container>
      </Copyright>
    </>
  );
};
