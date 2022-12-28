import { PageMeta } from '@/types';

export const Meta = ({ metadata }: { metadata: PageMeta }) => (
  <>
    <title>
      {metadata.title.rendered}
    </title>
    <meta name="foo" />
  </>
);
