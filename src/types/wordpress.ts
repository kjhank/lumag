import { IconSlug } from './global';

export type ResponseJSON = {
  [key: string]: string | number;
};

export enum Languages {
  english = 'en',
  german = 'de',
  polish = 'pl',
  // russian = 'ru',
  spanish = 'es',
}
export type Template = 'about' | 'contact' | 'csr' | 'history' | 'home' | 'ips' | 'managing' | 'news' | 'offer' | 'offerBrakes' | 'page' | 'quality' | 'values' | 'notFound';

export type Translations = {
  [key in Languages]: number;
};

type Guid = {
  rendered: string;
};

type Title = {
  rendered: string;
};

type Content = {
  rendered: string;
  protected: boolean;
};

type Excerpt = {
  rendered: string;
  protected: boolean;
};

export type PostType = 'page' | 'post';

export type SeeMore = {
  hasSeeMore: boolean;
  heading: string;
  recommendations: Array<{
    background: ACFImage;
    heading: string;
    linkText: string;
    text: string;
    url: ACFPage;
  }>;
};

export type PageACF = {
  header?: {
    background: ACFImage;
    verticalBackground?: ACFImage;
    title: string;
    text?: string;
  };
  posts?: {
    postCount?: number;
  };
  seeMore: SeeMore | false;
  template: {
    label: string;
    value: Template;
  };
};

export type OgImage = {
  height: string;
  width: string;
  url: string;
  type: string;
};

export type SEO = {
  title: string;
  description?: string;
  robots: {
    index: string;
    follow: string;
    'max-snippet': string;
    'max-image-preview': string;
    'max-video-preview': string;
  };
  og_image: Array<OgImage>;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  path?: string;
  article_publisher: string;
  article_modified_time: string;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image?: string;
  twitter_site: string;
  schema: {
    '@context': string;
    '@graph': Array<{
      '@type': string;
      '@id': string;
      url?: string;
      name?: string;
      isPartOf?: {
        '@id': string;
      };
      datePublished?: string;
      dateModified?: string;
      description?: string;
      breadcrumb?: {
        '@id': string;
      };
      inLanguage?: string;
      potentialAction?: Array<{
        '@type': string;
        target: any;
        'query-input'?: string;
      }>;
      itemListElement?: Array<{
        '@type': string;
        position: number;
        name: string;
        item?: string;
      }>;
      publisher?: {
        '@id': string;
      };
      logo?: {
        '@type': string;
        inLanguage: string;
        '@id': string;
        url: string;
        contentUrl: string;
        width: number;
        height: number;
        caption: string;
      };
      image?: {
        '@id': string;
      };
      sameAs?: Array<string>;
    }>;
  };
};

export type Page = {
  acf: PageACF;
  author: number;
  comment_status: string;
  content: Content;
  date_gmt: string;
  date: string;
  excerpt: Excerpt;
  featured_media: number;
  guid: Guid;
  id: number;
  lang: Languages;
  link: string;
  menu_order: number;
  meta: Array<any>;
  modified_gmt: string;
  modified: string;
  parent: number;
  ping_status: string;
  slug: string;
  status: string;
  template: string;
  title: Title;
  type: PostType;
  translations: {
    [key in Languages]: number
  };
  yoast_head_json: SEO;
  pll_sync_post: Array<any>;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
    'version-history': Array<{
      count: number;
      href: string;
    }>;
    'predecessor-version': Array<{
      id: number;
      href: string;
    }>;
    'wp:attachment': Array<{
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
};

export type Post = {
  acf: {
    thumbnail: ACFImage;
  };
  author: number;
  categories: Array<number>;
  comment_status: string;
  content: Content;
  date_gmt: string;
  date: string;
  excerpt: Excerpt;
  featured_media: number;
  format: string;
  guid: Guid;
  id: number;
  lang: Languages;
  link: string;
  meta: Array<any>;
  modified_gmt: string;
  modified: string;
  ping_status: string;
  pll_sync_post: Array<any>;
  slug: string;
  status: string;
  sticky: boolean;
  tags: Array<any>;
  template: string;
  title: Title;
  translations: Translations;
  type: string;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
    'version-history': Array<{
      count: number;
      href: string;
    }>;
    'wp:attachment': Array<{
      href: string;
    }>;
    'wp:term': Array<{
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
};

export type PaginatedItem<T = {}> = {
  heading: string;
  image: ACFImage;
  text: string;
  other?: T;
};

export type ImageSize = 'medium' | 'large' | 'thumbnail' | 'medium_large' | '1536x1536' | 'full';

export type ImageSizes = {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
};

export type Image = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Array<any>;
  acf: Array<any>;
  lang: string;
  translations: {
    pl: number;
  };
  pll_sync_post: Array<any>;
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: {
      [key in ImageSize]: ImageSizes;
    };
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
      keywords: Array<any>;
    };
  };
  post: any;
  source_url: string;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
  };
};

export type Error = {
  code: string;
  message: string;
  data: {
    status: number;
  };
};

export type MediaSizes = {
  thumbnail: string;
  'thumbnail-width': number;
  'thumbnail-height': number;
  medium: string;
  'medium-width': number;
  'medium-height': number;
  medium_large: string;
  'medium_large-width': number;
  'medium_large-height': number;
  large: string;
  'large-width': number;
  'large-height': number;
  '1536x1536': string;
  '1536x1536-width': number;
  '1536x1536-height': number;
  '2048x2048': string;
  '2048x2048-width': number;
  '2048x2048-height': number;
};

export type ACFImage = {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: MediaSizes;
};

export type ACFFile = {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    'thumbnail-width': number;
    'thumbnail-height': number;
    medium: string;
    'medium-width': number;
    'medium-height': number;
    medium_large: string;
    'medium_large-width': number;
    'medium_large-height': number;
    large: string;
    'large-width': number;
    'large-height': number;
    '1536x1536': string;
    '1536x1536-width': number;
    '1536x1536-height': number;
    '2048x2048': string;
    '2048x2048-width': number;
    '2048x2048-height': number;
  };
};

export type MenuItem = {
  label: string;
  page: ACFPage;
};

export type SearchMessages = {
  noResults: string;
  results: string;
  searching: string;
};

export type ACFPage = {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
};

export type ParsedACFPage = {
  slug: string;
  title: string;
};

export type ACFMenu = {
  label: string;
} & ({
  itemType: 'submenu';
  page?: never;
  submenu: Array<MenuItem>;
} | {
  itemType: 'page';
  page: ACFPage;
  submenu?: never;
});

export type ACFFooterMenu = {
  page: ACFLink;
  label: string;
  isBold: boolean;
};

export type ParsedMenu = {
  label: string;
} & ({
  itemType: 'page';
  page: ParsedACFPage;
} | {
  itemType: 'submenu';
  submenu: Array<{
    label: string;
    page: ParsedACFPage;
  }>;
});

export type Social = {
  iconSlug: IconSlug;
  url: string;
};

export type ContactForm = {
  id: number;
  locale: string;
  slug: string;
  title: string;
};

export type Options = {
  address: {
    address: string;
    background: ACFImage;
    socials: Array<Social>;
    verticalBackground: ACFImage;
  };
  cookiesText: string;
  cookiesButtonText: string;
  defaultNewsThumbnail: ACFImage;
  footerNav: Array<{
    heading: string;
    list: Array<ACFFooterMenu>;
  }>;
  footerText: string;
  nav: {
    mainMenu: Array<ACFMenu>;
  };
  newsletter: Newsletter;
  search: string;
  searchMessages: SearchMessages;
};

export type FooterSubmenu = {
  isBold: boolean;
  label: string;
  page: ACFLink;
  title: string;
};

export type FooterMenu = {
  heading: string;
  subitems: Array<FooterSubmenu>;
};

export type FormMessages = {
  exists: string;
  success: string;
  error: string;
};

export type Newsletter = {
  agreement: string;
  buttonText: string;
  heading: string;
  mailListHash: string;
  messages: FormMessages;
  placeholder: string;
};

export type ParsedMainNav = {
  itemType: 'page' | 'submenu';
  label: string;
} & ({
  page: ParsedACFPage;
  submenu?: never;
} | {
  page?: never;
  submenu: Array<{
    label: string;
    page: ParsedACFPage;
  }>;
});

export type ParsedOptions = {
  address: string;
  cookiesText: string;
  cookiesButtonText: string;
  defaultNewsThumbnail: ACFImage;
  footer: {
    background: ACFImage;
    copyright: string;
    nav: Array<FooterMenu>;
    verticalBackground: ACFImage;
  };
  nav: Array<ParsedMainNav>;
  newsletter: Newsletter;
  search: string;
  searchMessages: SearchMessages;
  socials: Array<Social>;
};

export type ParsedPost = {
  date: string;
  excerpt: string;
  image: ACFImage;
  slug: string;
  title: string;
  text: string;
};

export type ACFLink = {
  title: string;
  url: string;
  target: string;
};

export type Video = {
  buttonText: string;
  mp4?: ACFFile;
  poster: ACFImage;
  webm: ACFFile;
};

export type SearchResult = {
  id: number;
  subtype: 'page' | 'post';
  title: string;
  url: string;
};
