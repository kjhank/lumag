import { ButtonLink, Container } from '@/components';
import { useApiLinks } from '@/hooks/useApiLinks';
import {
  Background, Heading, Section, SingleTile, Text,
} from './Tiles.styled';
import { TileProps, TilesProps } from './Tiles.types';

const Tile = ({ tile }: TileProps) => {
  const url = useApiLinks(tile.link.slug.url);

  return (
    <SingleTile key={tile.heading}>
      <Background imageData={tile.background} />
      <Heading>{tile.heading}</Heading>
      <Text>{tile.content}</Text>
      <ButtonLink to={url}>
        {tile?.link?.text}
      </ButtonLink>
    </SingleTile>
  );
};

export const Tiles = ({ items }: TilesProps) => (
  <Section>
    <Container>
      {items.map(tile => <Tile key={tile.heading} tile={tile} />)}
    </Container>
  </Section>
);
