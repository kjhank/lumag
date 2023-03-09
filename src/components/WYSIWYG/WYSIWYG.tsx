import { Main } from './WYSIWYG.styled';
import { WYSIWYGProps } from './WYSIWYG.types';

export const WYSIWYG = ({
  className, as = 'article', html,
}: WYSIWYGProps) => (
  <Main
    as={as}
    className={className}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
