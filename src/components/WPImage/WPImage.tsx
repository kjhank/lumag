import { PictureNode } from './WPImage.styled';
import { WPImageProps } from './WPImage.types';

export const WPImage = ({
  imageData, className, isLazy = true, alt = '',
}: WPImageProps) => {
  const oldFormatPath = imageData?.url;
  const webpPath = `${oldFormatPath?.replaceAll('wp-content/', 'wp-content/uploads-webpc/')}.webp` ?? null; // this component is set up to generate URLs vbased on the 'Converter for Media plugin', this should be adjusted accordingly if using another plugin

  // TODO: avif maybe?

  return (
    <PictureNode className={className}>
      <source src={webpPath} type="webp" />
      <source src={oldFormatPath} type={imageData?.subtype} />
      <img
        alt={imageData?.alt ?? alt}
        height={imageData?.height}
        loading={isLazy ? 'lazy' : 'eager'}
        src={oldFormatPath}
        width={imageData?.width}
      />
    </PictureNode>
  );
};
