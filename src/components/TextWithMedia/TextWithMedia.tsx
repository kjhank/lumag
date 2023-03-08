import sanitize from 'sanitize-html';
import { sanitizeConfig as defaultSanitizeConfig } from '@/utils/globalConfigs';
import {
  GalleryWrapper,
  Image, TextWrapper, VideoWrapper, Wrapper,
} from './TextWithMedia.styled';
import { TextWithMediaProps } from './TextWithMedia.types';
import { Gallery } from './Gallery';

export const TextWithMedia = (
  {
    as, backgroundIndex = 17, className,
    textElement = 'p', defaultImageIndex = 0,
    fontSize = 18, hasDecoration = false,
    hasExtraPadding = false, heading, image,
    images, layout = 'alternating',
    sanitizeConfig = defaultSanitizeConfig,
    text, video,
  }: TextWithMediaProps
) => {
  const ContentNode: keyof JSX.IntrinsicElements = textElement;

  return (
    (
      <Wrapper
        as={as} backgroundIndex={backgroundIndex}
        className={className} hasDecoration={hasDecoration}
        layout={layout}
      >
        {image && <Image decorationOn={layout} imageData={image} />}
        {video && (
          <VideoWrapper decorationOn={layout}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              autoPlay={false}
              controls
              poster={video.poster.url}
            >
              <source src={video.webm.url} type="video/webm" />
              {video?.mp4 && <source src={video.mp4.url} type="video/mp4" />}
            </video>
          </VideoWrapper>
        )}
        {images && (
          <GalleryWrapper decorationOn={layout}>
            <Gallery images={images} initialIndex={defaultImageIndex} />
          </GalleryWrapper>
        )}
        <TextWrapper $fontSize={fontSize} hasExtraPadding={hasExtraPadding}>
          <h2>{heading}</h2>
          <ContentNode dangerouslySetInnerHTML={{
            __html: sanitize(text, sanitizeConfig),
          }}
          />
        </TextWrapper>
      </Wrapper>
    )
  );
};
