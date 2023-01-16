import { Link } from 'gatsby';
import {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { Container, ExternalLink } from '@/components';
import {
  ActionBackground,
  ActionSection, Address,
  BottomNav, Copyright, LinkItem, LinksHeading,
  LinksList, LinksWrapper, NewsletterAgreement, NewsletterHeading,
  NewsletterInput, NewsletterSubmit, VerticalBackground,
} from '../Layout.styled';
import { FooterProps } from '../Layout.types';
import {
  Agency, Facebook, freshmailApiToken, freshmailApiUrl, Linkedin, Logo, Twitter, Youtube,
} from '@/static';
import { useApiLinks } from '@/hooks';
import { FooterSubmenu } from '@/types';

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
}: FooterProps) => {
  const [email, setEmail] = useState('');
  const [isAgreed, setAgreed] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    setAgreed(current => !current);
  };

  const handleNewsletter = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const headers = new Headers({
      Authorization: `Bearer ${freshmailApiToken}`,
      'Content-Type': 'application/json',
    });
    const body = JSON.stringify({
      email,
      list: 'q73xtkabfc',
    });
    const request: Request = new Request(`${freshmailApiUrl}/subscriber/add`, {
      body,
      headers,
      method: 'POST',
    });

    try {
      const response = await fetch(`${freshmailApiUrl}/ping`, request);
      const result = await response.json();

      console.log(result);
      // const response = await fetch(request);

      // console.log({ response });

      // if (response.status === 200) {
      //   const result = await response.json();

      //   console.log({ result });
      // }
    } catch (error) {
      console.log({ error });
    }
  };

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
              name="email" onChange={handleEmailChange}
              placeholder={newsletter?.placeholder}
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
            <Agency />
          </a>
        </Container>
      </Copyright>
    </>
  );
};
