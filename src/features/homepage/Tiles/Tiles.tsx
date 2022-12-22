import { ButtonLink, Container } from '@/components';
import {
  Background, Heading, Section, SingleTile, Text,
} from './Tiles.styled';
import { TilesProps } from './Tiles.types';

export const Tiles = ({ items }: TilesProps) => (
  <Section>
    <Container>
      {items.map(tile => (
        <SingleTile key={tile.heading}>
          <Background imageData={tile.background} />
          <Heading>{tile.heading}</Heading>
          <Text>{tile.content}</Text>
          <ButtonLink to={tile?.link?.slug?.url}>
            {tile?.link?.text}
          </ButtonLink>
        </SingleTile>
      ))}
    </Container>
  </Section>
);
