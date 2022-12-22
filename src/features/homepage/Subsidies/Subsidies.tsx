import { SubsidiesProps } from './Subsidies.types';

import {
  Image, ImageElem, ImageGrid, Section, Text,
} from './Subsidies.styled';
import { Container } from '@/components';

export const Subsidies = ({ images, text } : SubsidiesProps) => (
  <Section>
    <Container>
      <ImageGrid>
        {images?.length > 0 && images.map(({ image }) => (
          <ImageElem key={image?.filename}>
            <Image imageData={image} />
          </ImageElem>
        ))}
      </ImageGrid>
      <Text>{text}</Text>
    </Container>
  </Section>
);
