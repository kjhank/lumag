import { ButtonLink, Container } from '@/components';
import { ArrowDown } from '@/static';
import { Section, Tile } from './Tiles.styled';
import { TilesProps } from './Tiles.types';

export const Tiles = ({
  downloads, media, suppliers,
}: TilesProps) => (
  <Section>
    <Container>
      <Tile>
        <h3>{suppliers.heading}</h3>
        <p>{suppliers.text}</p>
        <ButtonLink to={`./${suppliers.linkFragment}`}>
          {suppliers.linkText}
        </ButtonLink>
      </Tile>
      <Tile>
        <h3>{media.heading}</h3>
        <p>{media.text}</p>
        <ButtonLink
          className="link-email" hasArrow={false}
          to={`mailto:${media.email}`}
        >
          {media.linkText}
        </ButtonLink>
      </Tile>
      <Tile>
        <h3>{downloads.heading}</h3>
        <ul>
          {downloads.file.map(file => (
            <li key={file.linkText}>
              <a
                download
                href={file.url.url}
              >
                {file.linkText}
              </a>
              <ArrowDown />
            </li>
          ))}
        </ul>
      </Tile>
    </Container>
  </Section>
);
