import sanitize from 'sanitize-html';
import { sanitizeConfig } from '@/utils/globalConfigs';
import {
  Image, TextWrapper, VideoWrapper, Wrapper,
} from './TextWithMedia.styled';
import { TextWithMediaProps } from './TextWithMedia.types';

export const TextWithMedia = (
  {
    as, backgroundIndex = 17, fontSize = 18, hasDecoration = false, image, layout = 'alternating', text, heading, video,
  }: TextWithMediaProps
) => (
  <Wrapper
    as={as} backgroundIndex={backgroundIndex}
    hasDecoration={hasDecoration}
    layout={layout}
  >
    {image && <Image decorationOn={layout} imageData={image} />}
    {video && (
    <VideoWrapper decorationOn={layout}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        poster={video.poster.url}
      >
        <source src={video.webm.url} type="video/webm" />
        {video?.mp4 && <source src={video.mp4.url} type="video/mp4" />}
      </video>
    </VideoWrapper>
    )}
    <TextWrapper $fontSize={fontSize}>
      <h2>{heading}</h2>
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{
        __html: sanitize(text, sanitizeConfig),
      }}
      />
    </TextWrapper>
  </Wrapper>
);
