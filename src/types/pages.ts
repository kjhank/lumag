import { PageProps } from 'gatsby';
import { TextWithImageProps } from '@/components/TextWithImage/TextWithImage.types';
import { IconSlug } from './global';
import {
  ACFFile, ACFImage, ACFLink, Languages, ParsedOptions,
  ParsedPost, Post, Template, Translations,
} from './wordpress';

export type PageMeta = {
  lang: Languages;
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
    content: {
      buttons: {
        active: string;
        inactive: string;
      };
      perpage: number;
    };
    header: {
      background: ACFImage;
      verticalBackground: ACFImage;
      title: string;
    };
    posts: Array<ParsedPost>;
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
    url: ACFLink;
    label: string;
  };
};

export type Subsidies = {
  images: Array<{ image: ACFImage }>;
  text: string;
};

export type HomePageContent = {
  // template: {
  //   value: Template;
  //   label: string;
  // };
  carousel: Array<CarouselItem>;
  tiles: Array<Tile>;
  whyUs: WhyUs;
  news: News;
  promoAside: Array<PromoItem>;
  subsidies: Subsidies;
};

export type ContactData = {
  content: string;
  mapsSrc: string;
};

export type Rep = {
  region: string;
  description: string;
  emails: Array<{
    email: string;
  }>;
  regionPhones: Array<{
    no: string;
  }>;
};

export type SuppliersTile = {
  heading: string;
  text: string;
  linkFragment: string;
  linkText: string;
};

export type MediaTile = {
  heading: string;
  text: string;
  email: string;
  linkText: string;
};

export type File = {
  linkText: string;
  url: ACFFile;
};

export type DownloadsTile = {
  heading: string;
  file: Array<File>;
};

export type FormField = {
  label: string;
  isRequired: boolean;
};

export type FormFieldName = 'company' | 'name' | 'email' | 'phone' | 'subject' | 'message';

export type SubjectOption = {
  slug: string;
  description: string;
  email: string;
};

export type Legal = {
  slug: string;
  content: string;
  isRequired: boolean;
};

export type ContactForm = {
  heading: string;
  subheading: string;
  text: string;
  fields: {
    company: FormField;
    name: FormField;
    email: FormField;
    phone: FormField;
    subject: FormField;
    message: FormField;
  };
  subjectOptions: Array<SubjectOption>;
  submitText: string;
  legal: Array<Legal>;
  footer: string;
};

export type Header = {
  background: ACFImage;
  text?: string;
  title: string;
  verticalBackground?: ACFImage;
};

export type ContactPageContext = {
  template: Template;
  header: {
    title: string;
    background: ACFImage;
  };
  contactData: Array<ContactData>;
  repsBackground: ACFImage;
  repsHeading: string;
  reps: Array<Rep>;
  tiles: {
    suppliers: SuppliersTile;
    media: MediaTile;
    downloads: DownloadsTile;
  };
  contactForm: ContactForm;
};

export type Catalog = {
  image: ACFImage;
  linkText: string;
  text: string;
  url: ACFLink;
};

export type Catalogs = {
  background: ACFImage;
  heading: string;
  list: Array<Catalog>;
};

export type Certificates = {
  caption: string;
  heading: string;
  image: ACFImage;
  text: string;
};

export type OfferBrakesPageContext = {
  brakeDiscs: TextWithImageProps;
  brakeLinings: TextWithImageProps;
  brakePads: TextWithImageProps;
  catalogs: Catalogs;
  certs: Certificates;
  header: Header;
  seeMore: {};
};

export type HomePageProps = PageProps & {
  pageContext: PageContext & {
    content: HomePageContent;
    posts: Array<Post>;
  };
};

export type ContactPageProps = PageProps & {
  pageContext: PageContext & {
    content: ContactPageContext;
  };
};

export type OfferBrakesPageProps = PageProps & {
  pageContext: PageContext & {
    content: OfferBrakesPageContext;
  };
};

export type CustomPagePropsx<T> = PageProps & {
  pageContext: PageContext & {
    content: T;
  };
};
