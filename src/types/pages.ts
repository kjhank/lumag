import { PageProps } from 'gatsby';
import { IconSlug } from './global';
import {
  ACFImage, Languages, ParsedOptions, Post, Template, Translations,
} from './wordpress';

export type PageMeta = {
  title: {
    rendered: string;
  };
};

export type I18n = {
  slugs: { [key in keyof Translations]: string };
};

export type PageContext = {
  content: {
    [key: string]: string | number | {} | [];
  };
  date: string;
  id: number;
  i18n: I18n;
  lang: Languages;
  metadata: PageMeta;
  options: ParsedOptions;
  parentId?: number;
  slug: string;
};

export type CustomPageProps = PageProps & {
  pageContext: PageContext;
};

export type NewsPageProps = PageProps & {
  pageContext: PageContext & {
    posts: Array<Post>;
  };
};

export type GenericPageProps = PageProps & {
  pageContext: Omit<PageContext, 'content'> & {
    content:
    { rendered: string }; header: {
      background: ACFImage;
    };
  };
};

export type CarouselItem = {
  heading: string;
  subheading: string;
  image: ACFImage;
  link: {
    label: string;
    url: string;
  };
};

export type Tile = {
  heading: string;
  content: string;
  background: ACFImage;
  link: {
    slug: {
      title: string;
      url: string;
      target: string;
    };
    text: string;
  };
};

export type WhyUs = {
  background: ACFImage;
  heading: string;
  text: string;
  icons: Array<{
    label: string;
    svgSlug: {
      value: IconSlug;
      label: string;
    };
  }>;
};

export type News = {
  heading: string;
  postCount: string;
  linkLabel: string;
  newsLinkLabel: string;
};

export type PromoItem = {
  text: string;
  image: ACFImage;
  link: {
    url: {
      title: string;
      url: string;
      target: string;
    };
    Label: string;
  };
};

export type Subsidies = {
  images: Array<{ image: ACFImage }>;
  text: string;
};

export type HomePageContent = {
  template: {
    value: Template;
    label: string;
  };
  carousel: Array<CarouselItem>;
  tiles: Array<Tile>;
  whyUs: WhyUs;
  news: News;
  promoAside: Array<PromoItem>;
  subsidies: Subsidies;
};

export type HomePageProps = PageProps & {
  pageContext: PageContext & {
    content: HomePageContent;
    posts: Array<Post>;
  };
};
