import { Main } from './WYSIWYG.styled';
import { WYSIWYGProps } from './WYSIWYG.types';

export const WYSIWYG = ({ html } : WYSIWYGProps) => (
  <Main dangerouslySetInnerHTML={{ __html: html }} />
);
