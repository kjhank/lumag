import { ACFImage } from '@/types';

export type HeaderProps = {
  background: ACFImage;
  title: string;
};

export type GenericPageRendererProps = {
  content: string;
  header: HeaderProps;
};
