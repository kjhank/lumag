import { useState } from 'react';
import { WPImage } from '../WPImage/WPImage';
import {
  CurrentImage, ImageGrid, ImageTrigger,
} from './Gallery.styled';
import { GalleryProps } from './TextWithMedia.types';

export const Gallery = ({ initialIndex, images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleImageTrigger = (index: number) => {
    if (index === currentIndex) return;

    setCurrentIndex(index);
  };

  const columnsCount = Math.floor(images.length / 2);

  return (
    <>
      <CurrentImage imageData={images[currentIndex].image} />
      <ImageGrid columnsCount={columnsCount}>
        {images.map(({ image }, index) => (
          <ImageTrigger key={image.ID} onClick={() => handleImageTrigger(index)}>
            <WPImage imageData={image} />
          </ImageTrigger>
        ))}
      </ImageGrid>
    </>
  );
};
