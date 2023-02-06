import { PageProps } from 'gatsby';
import { Layout, TextWithMediaProps } from '@/components/TextWithMedia/TextWithMedia.types';
import { IconSlug } from './global';
import {
  ACFFile, ACFImage, ACFLink, ACFPage, FormMessages, Languages, ParsedOptions,
  ParsedPost, Post, SeeMore, SEO, Template, Translations, Video,
} from './wordpress';

export type PageMeta = {
  lang: Languages;
  seo: SEO;
  title: {
    rendered: string;
  };
};

export type Icon = {
  [key in 'label' | 'text']: string;
} & ({
  iconSlug: never;
  svgSlug: {
    value: IconSlug;
    label: string;
  };
} | {
  svgSlug: never;
  iconSlug: IconSlug;
});

export type I18n = {
  slugs: { [key in keyof Translations]: string };
};

export type PageContext = {
  content: {
    [key: string]: string | number | {} | [];
    seeMore: SeeMore;
  };
  contactForms: Array<ContactForm>;
  date: string;
  id: number;
  i18n: I18n;
  lang: Languages;
  metadata: PageMeta;
  options: ParsedOptions;
  parentId?: number;
  slug: string;
};

export type GenericPageProps = PageProps & {
  pageContext: Omit<PageContext, 'content'> & {
    content:
    {
      body: string;
      seeMore: SeeMore;
    };
    header: {
      background: ACFImage;
    };
  };
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

export type CarouselItem = {
  heading: string;
  subheading: string;
  image: ACFImage;
  link: {
    label: string;
    url: ACFLink;
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
  icons: Array<Icon>;
};

export type News = {
  heading: string;
  postCount: string;
  linkLabel: string;
  newsLinkLabel: string;
  targetPost: ACFPage;
};

export type PromoItem = {
  text: string;
  image: ACFImage;
  link: {
    url: ACFLink;
    text: string;
  };
};

export type Subsidies = {
  images: Array<{ image: ACFImage }>;
  text: string;
};

export type CustomPageProps<T = null> = PageProps & {
  pageContext: PageContext & {
    content: T & SeeMore;
  };
};

export type HomePageContent = {
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
  formUrl: ACFLink;
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

export type FormFieldName = 'company' | 'username' | 'email' | 'phone' | 'subject' | 'message';

export type SubjectOption = {
  formId: number;
  slug: string;
  description: string;
  email: string;
};

export type Legal = {
  slug: string;
  content: string;
  isRequired: boolean;
};

type ContactForm = {
  heading: string;
  subheading: string;
  text: string;
  fields: {
    company: FormField;
    username: FormField;
    email: FormField;
    phone: FormField;
    subject: FormField;
    message: FormField;
  };
  messages: FormMessages;
  subjectOptions: Array<SubjectOption>;
  submitText: string;
  legal: Array<Legal>;
  footer: string;
};

export type Header = {
  background: ACFImage;
  footerText?: string;
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
  background?: ACFImage;
  caption: string;
  heading: string;
  image: ACFImage;
  text: string;
};

export type OfferBrakesPageContent = {
  brakeDiscs: TextWithMediaProps;
  brakeLinings: TextWithMediaProps;
  brakePads: TextWithMediaProps;
  catalogs: Catalogs;
  certs: Certificates;
  header: Header;
};

export type HomePageProps = PageProps & {
  pageContext: PageContext & {
    content: HomePageContent;
    posts: Array<Post>;
  };
};

export type ContactPageProps = CustomPageProps<ContactPageContext>;

export type OfferBrakesPageProps = CustomPageProps<OfferBrakesPageContent>;

export type MiniCarouselLayout = 'imageRight' | 'imageLeft';

export type MiniCarousel = {
  content: Array<{
    heading: string;
    text: string;
  }>;
  image: ACFImage;
  layout: MiniCarouselLayout;
  noShift?: boolean;
};

export type Partners = {
  grayBoxes: Array<{
    heading: string;
    headingHasImage: boolean;
    headingImage: ACFImage;
    text: string;
  }>;
  heading: string;
  text: string;
};

export type RnD = {
  heading: string;
  image: ACFImage;
  layout: Layout;
  text: string;
};

export type QualityPageContent = {
  certs: Certificates;
  header: Header;
  characteristicsHeading: string;
  miniCarousel: MiniCarousel;
  partners: Partners;
  rnd: RnD;
  textWithImage: TextWithMediaProps;
};

export type IPSPageContent = {
  carryPlate: TextWithMediaProps;
  certs: Certificates;
  coop: {
    background: ACFImage;
    heading: string;
    linkText: string;
    post: ACFPage;
    text: string;
  };
  europeanLeader: MiniCarousel;
  header: Header;
  iconsEtc: {
    background: ACFImage;
    iconsList: Array<Icon>;
  };
  innovativeTech: MiniCarousel;
  textWithVideo: TextWithMediaProps;
};

export type CSRItem = {
  content: string;
  image: ACFImage;
  title: string;
};

export type CSRPageContent = {
  buttons: {
    active: string;
    inactive: string;
  };
  header: Header;
  list: Array<CSRItem>;
};

export type Quote = {
  heading: string;
  image: ACFImage;
  quote: string;
  subheading: string;
};

export type AboutItem = {
  image: ACFImage;
  text: string;
  title: string;
};

export type AboutUsPageContent = {
  getToKnowUs: {
    heading: string;
    list: Array<AboutItem>;
    video: Video;
  };
  header: Header;
  person: Quote;
  whyDifferent: {
    background: ACFImage;
    heading: string;
    iconsList: Array<{
      iconslug: IconSlug;
      text: string;
    }>;
  };
};

export type Code = {
  buttonText: string;
  file: ACFFile;
  heading: string;
};

export type Goals = {
  background: ACFImage;
  finePrint: string;
  heading: string;
  list: Array<{ text: string }>;
};

export type ValuesPageContent = {
  code: Code;
  goals: Goals;
  header: Header;
  list: Array<{
    heading: string;
    image: ACFImage;
    text: string;
  }>;
};

export type ManagingPageContent = {
  header: Header;
  list: Array<TextWithMediaProps>;
  tools: {
    background: ACFImage;
    finePrint: string;
    heading: string;
    list: Array<{ text: string }>;
  };
};

export type HistoryEvent = {
  description: string;
  image: ACFImage;
  title: string;
  year: string;
};

export type HistoryPageContent = {
  header: Header;
  history: {
    heading: string;
    list: Array<HistoryEvent>;
    text: string;
  };
};

export type NotFoundPageContent = {
  header: Header;
};
export type NotFoundPageProps = CustomPageProps<NotFoundPageContent>;
export type IPSPageProps = CustomPageProps<IPSPageContent>;
export type QualityPageProps = CustomPageProps<QualityPageContent>;
export type CSRPageProps = CustomPageProps<CSRPageContent>;
export type AboutPageProps = CustomPageProps<AboutUsPageContent>;
export type ValuesPageProps = CustomPageProps<ValuesPageContent>;
export type ManagingPageProps = CustomPageProps<ManagingPageContent>;
export type HistoryPageProps = CustomPageProps<HistoryPageContent>;
