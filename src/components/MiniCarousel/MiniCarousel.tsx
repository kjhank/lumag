import { useState } from 'react';
import { ArrowRight } from '@/static';
import {
  ButtonsWrapper,
  ContentList, Image, ImageWrapper, Item, ItemButton, ItemHeading, ItemText, Wrapper,
} from './MiniCarousel.styled';
import { MiniCarouselProps } from './MiniCarousel.types';

export const MiniCarousel = ({
  className, content, image, layout, noShift = false,
}: MiniCarouselProps) => {
  const itemCount = content?.length;
  const [currentItem, setCurrentItem] = useState(0);

  const handleButton = (dir: 'next' | 'previous') => {
    setCurrentItem(current => (dir === 'next' ? current + 1 : current - 1));
  };

  if (!itemCount) return null;

  return (
    <Wrapper className={className} layout={layout}>
      <ImageWrapper noShift={noShift}>
        <Image imageData={image} />
        <ButtonsWrapper>
          <ItemButton
            disabled={currentItem === 0}
            onClick={() => handleButton('previous')}
          >
            <ArrowRight />
          </ItemButton>
          <ItemButton
            disabled={currentItem === itemCount - 1}
            onClick={() => handleButton('next')}
          >
            <ArrowRight />
          </ItemButton>
        </ButtonsWrapper>
      </ImageWrapper>
      <ContentList>
        {content.map((item, index) => (
          <Item isActive={index === currentItem} key={item.heading}>
            <ItemHeading>{item.heading}</ItemHeading>
            <ItemText>{item.text}</ItemText>
          </Item>
        ))}
      </ContentList>
    </Wrapper>
  );
};
