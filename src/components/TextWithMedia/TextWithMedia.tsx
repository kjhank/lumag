import sanitize from 'sanitize-html';
import { sanitizeConfig as defaultSanitizeConfig } from '@/utils/globalConfigs';
import {
  Image, TextWrapper, VideoWrapper, Wrapper,
} from './TextWithMedia.styled';
import { TextWithMediaProps } from './TextWithMedia.types';

export const TextWithMedia = (
  {
    as, className, contentElement = 'p',
    backgroundIndex = 17, fontSize = 18, hasDecoration = false,
    hasExtraPadding = false, image, layout = 'alternating',
    text, heading, sanitizeConfig = defaultSanitizeConfig, video,
  }: TextWithMediaProps
) => {
  const ContentNode: keyof JSX.IntrinsicElements = contentElement;

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
        <TextWrapper $fontSize={fontSize} hasExtraPadding={hasExtraPadding}>
          <h2>{heading}</h2>
          {/* eslint-disable-next-line react/no-danger */}
          <ContentNode dangerouslySetInnerHTML={{
            __html: sanitize(text, sanitizeConfig),
          }}
          />
        </TextWrapper>
      </Wrapper>
    )
  );
};
