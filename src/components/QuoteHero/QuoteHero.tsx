import {
  Author, Image, Quote, QuoteWrapper, Subheading, Wrapper,
} from './QuoteHero.styled';
import { QuoteHeroProps } from './QuoteHero.types';

export const QuoteHero = ({
  heading, image, quote, subheading,
}: QuoteHeroProps) => (
  <Wrapper>
    <QuoteWrapper>
      <Author>{heading}</Author>
      <Subheading>{subheading}</Subheading>
      <Quote>
        <p>{quote}</p>
      </Quote>
    </QuoteWrapper>
    <Image aspectRatio={image.width / image.height} imageData={image} />
  </Wrapper>
);
