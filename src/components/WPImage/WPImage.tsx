import { PictureNode } from './WPImage.styled';
import { WPImageProps } from './WPImage.types';

export const WPImage = ({
  imageData, className, isLazy = true, alt,
}: WPImageProps) => {
  const { media_details: meta, source_url: pngPath } = imageData;
  const webpPath = `${imageData.source_url.replaceAll('wp-content/', 'wp-content/uploads-webpc/')}.webp`;

  // TODO: avif maybe?

  return (
    <PictureNode
      className={className}
      height={meta.height}
      width={meta.width}
    >
      <source src={webpPath} type="webp" />
      <source src={pngPath} type="png" />
      <img
        alt={alt ?? imageData.alt_text}
        loading={isLazy ? 'lazy' : 'eager'}
        src={pngPath}
      />
    </PictureNode>
  );
};
