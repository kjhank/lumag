import { ButtonLink, Container } from '@/components';
import { SectionHeading } from '@/components/styled';
import { ArrowDown } from '@/static';
import { Section, Tile } from './Tiles.styled';
import { TilesProps } from './Tiles.types';

export const Tiles = ({
  downloads, media, suppliers,
}: TilesProps) => (
  <Section>
    <Container>
      <Tile>
        <SectionHeading as="h3">{suppliers.heading}</SectionHeading>
        <p>{suppliers.text}</p>
        <ButtonLink to={suppliers?.formUrl?.url}>
          {suppliers.linkText}
        </ButtonLink>
      </Tile>
      <Tile>
        <SectionHeading as="h3">{media.heading}</SectionHeading>
        <p>{media.text}</p>
        <ButtonLink
          className="link-email" hasArrow={false}
          to={`mailto:${media.email}`}
        >
          {media.linkText}
        </ButtonLink>
      </Tile>
      <Tile>
        <SectionHeading as="h3">{downloads.heading}</SectionHeading>
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
