import { ACFImage } from '@/types';

export type HeaderProps = {
  className?: string;
  background: ACFImage;
  footerText?: string;
  paddingBlockStart?: number;
  text?: string;
  title: string;
  verticalBackground?: ACFImage;
};
