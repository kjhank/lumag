import { useEffect } from 'react';
import { PageMeta } from '@/types';

export const Meta = ({ metadata }: { metadata: PageMeta }) => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', metadata.lang);
  }, [metadata]);

  // TODO: consider setting up a <base /> tag for languages base

  return (
    <>
      <title>
        {metadata.title.rendered}
      </title>
      <meta name="foo" />
    </>
  );
};
