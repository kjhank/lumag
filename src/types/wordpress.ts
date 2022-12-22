export type ResponseJSON = {
  [key: string] : string | number;
};

export enum Languages {
  english = 'en',
  german = 'de',
  polish = 'pl',
  russian = 'ru',
  spanish = 'es',
}

export type Template = 'about' | 'contact' | 'csr' | 'history' | 'home' | 'ips' | 'managing' | 'news' | 'offer' | 'offerBrakes' | 'page' | 'quality' | 'values';

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

export type PageACF = {
  posts?: {
    postCount?: number;
  };
  template: {
    label: string;
    value: Template;
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
  acf: Array<any>;
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
