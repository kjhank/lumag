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

export type Translations = {
  [key in Languages]: number;
};

type Guid = {
  rendered: string
};

type Title = {
  rendered: string
};

type Content = {
  rendered: string
  protected: boolean
};

type Excerpt = {
  rendered: string
  protected: boolean
};

export type PostType = 'page' | 'post';

export type PageACF = {
  template: {
    label: string;
    value: string;
  }
};

export type Page = {
  acf: PageACF
  author: number
  comment_status: string
  content: Content
  date_gmt: string
  date: string
  excerpt: Excerpt
  featured_media: number
  guid: Guid
  id: number
  lang: Languages
  link: string
  menu_order: number
  meta: Array<any>
  modified_gmt: string
  modified: string
  parent: number
  ping_status: string
  slug: string
  status: string
  template: string
  title: Title
  type: PostType
  translations: {
    [key in Languages]: number
  }
  pll_sync_post: Array<any>
  _links: {
    self: Array<{
      href: string
    }>
    collection: Array<{
      href: string
    }>
    about: Array<{
      href: string
    }>
    author: Array<{
      embeddable: boolean
      href: string
    }>
    replies: Array<{
      embeddable: boolean
      href: string
    }>
    'version-history': Array<{
      count: number
      href: string
    }>
    'predecessor-version': Array<{
      id: number
      href: string
    }>
    'wp:attachment': Array<{
      href: string
    }>
    curies: Array<{
      name: string
      href: string
      templated: boolean
    }>
  }
};

export type Post = {
  acf: Array<any>
  author: number
  categories: Array<number>
  comment_status: string
  content: Content
  date_gmt: string
  date: string
  excerpt: Excerpt
  featured_media: number
  format: string
  guid: Guid
  id: number
  lang: Languages
  link: string
  meta: Array<any>
  modified_gmt: string
  modified: string
  ping_status: string
  pll_sync_post: Array<any>
  slug: string
  status: string
  sticky: boolean
  tags: Array<any>
  template: string
  title: Title
  translations: Translations
  type: string
  _links: {
    self: Array<{
      href: string
    }>
    collection: Array<{
      href: string
    }>
    about: Array<{
      href: string
    }>
    author: Array<{
      embeddable: boolean
      href: string
    }>
    replies: Array<{
      embeddable: boolean
      href: string
    }>
    'version-history': Array<{
      count: number
      href: string
    }>
    'wp:attachment': Array<{
      href: string
    }>
    'wp:term': Array<{
      taxonomy: string
      embeddable: boolean
      href: string
    }>
    curies: Array<{
      name: string
      href: string
      templated: boolean
    }>
  }
};

export type Error = {
  code: string
  message: string
  data: {
    status: number
  }
};
