import sanitize from 'sanitize-html';
import { sanitizeConfig } from '@/utils/globalConfigs';
import {
  Image, TextWrapper, VideoWrapper, Wrapper,
} from './TextWithMedia.styled';
import { TextWithMediaProps } from './TextWithMedia.types';

export const TextWithMedia = ({
  as, image, layout = 'alternating', text, heading, video,
}: TextWithMediaProps) => (
  <Wrapper as={as} layout={layout}>
    {image && <Image decorationOn={layout === 'imageLeft' ? 'right' : 'left'} imageData={image} />}
    {video && (
      <VideoWrapper decorationOn={layout === 'imageLeft' ? 'right' : 'left'}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          poster={video.poster.url}
        >
          <source src={video.webm.url} type="video/webm" />
          <source src={video.mp4.url} type="video/mp4" />
        </video>
      </VideoWrapper>
    )}
    <TextWrapper>
      <h2>{heading}</h2>
      <p dangerouslySetInnerHTML={{
        __html: sanitize(text, sanitizeConfig),
      }}
      />
    </TextWrapper>
  </Wrapper>
);
