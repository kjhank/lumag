import sanitize from 'sanitize-html';
import { sanitizeConfig } from '@/utils/globalConfigs';
import {
  Image, TextWrapper, Wrapper,
} from './TextWithImage.styled';
import { TextWithImageProps } from './TextWithImage.types';

export const TextWithImage = ({
  image, layout, text, heading,
}: TextWithImageProps) => (
  <Wrapper layout={layout}>
    <Image imageData={image} />
    <TextWrapper>
      <h2>{heading}</h2>
      <p dangerouslySetInnerHTML={{ __html: sanitize(text, sanitizeConfig) }} />
    </TextWrapper>
  </Wrapper>
);
