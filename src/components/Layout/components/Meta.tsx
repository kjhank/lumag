import { useEffect } from 'react';
import { PageMeta } from '@/types';
import { useAppContext } from '@/hooks';

export const Meta = ({ metadata }: { metadata: PageMeta }) => {
  const { siteUrl, urlPrefix } = useAppContext();

  useEffect(() => {
    document?.documentElement.setAttribute('lang', metadata.lang);
  }, [metadata]);

  // TODO: consider setting up a <base /> tag for languages base

  return (
    <>
      <title>
        {metadata.title.rendered}
      </title>
      {metadata.seo.og_title && (
        <meta
          content={metadata.seo.og_title}
          property="og:title"
        />
      )}
      {metadata.seo.description && (
        <meta
          content={metadata.seo.description}
          name="description"
        />
      )}
      {metadata.seo.og_locale && (
        <meta
          content={metadata.seo.og_locale}
          property="og:locale"
        />
      )}
      {metadata.seo.og_type && (
        <meta
          content={metadata.seo.og_type}
          property="og:type"
        />
      )}
      {metadata.seo.path && (
        <meta
          content={`${siteUrl}${urlPrefix}${metadata.seo.path}`}
          property="og:url"
        />
      )}
      {metadata.seo.og_site_name && (
        <meta
          content={metadata.seo.og_site_name}
          property="og:site_name"
        />
      )}
      {metadata.seo.og_description && (
        <meta
          content={metadata.seo.og_description}
          property="og:description"
        />
      )}
      {metadata.seo.twitter_card && (
        <meta
          content={metadata.seo.twitter_card}
          property="twitter:card"
        />
      )}
      {metadata.seo.twitter_description && (
        <meta
          content={metadata.seo.twitter_description}
          property="twitter:description"
        />
      )}
      {metadata.seo.twitter_image && (
        <meta
          content={metadata.seo.twitter_image}
          property="twitter:image"
        />
      )}
      {metadata.seo.twitter_title && (
        <meta
          content={metadata.seo.twitter_title}
          property="twitter:image"
        />
      )}
      {metadata.seo?.og_image?.length > 0 && metadata.seo.og_image.map(image => (
        [
          <meta
            content={image.height}
            key="og-height"
            property="og:image:height"
          />,
          <meta
            content={image.url}
            key="og-url"
            property="og:image"
          />,
          <meta
            content={image.type}
            key="og-type"
            property="og:image:type"
          />,
          <meta
            content={image.width}
            key="og-width"
            property="og:image:width"
          />,
        ]
      ))}
    </>
  );
};
