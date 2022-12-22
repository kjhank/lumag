import { PictureNode } from './WPImage.styled';
import { WPImageProps } from './WPImage.types';

export const WPImage = ({
  imageData, className, isLazy = true, alt = '',
}: WPImageProps) => {
  const pngPath = imageData?.url;
  const webpPath = `${pngPath?.replaceAll('wp-content/', 'wp-content/uploads-webpc/')}.webp` ?? null; // this component is set up to generate URLs vbased on the 'Converter for Media plugin', this should be adjusted accordingly if using another plugin

  // TODO: avif maybe?

  return (
    <PictureNode className={className}>
      <source src={webpPath} type="webp" />
      <source src={pngPath} type="png" />
      <img
        alt={imageData.alt ?? alt}
        height={imageData.height}
        loading={isLazy ? 'lazy' : 'eager'}
        src={pngPath}
        width={imageData.width}
      />
    </PictureNode>
  );
};
