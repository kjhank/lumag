import { ACFImage } from '@/types';

export type HeaderProps = {
  className?: string;
  background: ACFImage;
  footerText?: string;
  paddingBlockStart?: number;
  paddingBlockEnd?: number;
  paddingInline?: number | string;
  text?: string;
  title: string;
  verticalBackground?: ACFImage;
};
