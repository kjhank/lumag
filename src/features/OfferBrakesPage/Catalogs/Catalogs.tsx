import { CatalogsProps } from './Catalogs.types';
import { ButtonLink, Container } from '@/components';
import {
  Background, Catalog, CatalogText,
  Image, List, Section,
} from './Catalogs.styled';
import { SectionHeading } from '@/components/styled';

export const Catalogs = ({
  background, heading, list,
}: CatalogsProps) => (
  <Section>
    <Background imageData={background} />
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <List>
        {list.map(catalog => (
          <Catalog key={catalog.text}>
            <Image imageData={catalog.image} />
            <CatalogText>{catalog.text}</CatalogText>
            <ButtonLink to={catalog.url.url}>{catalog.linkText}</ButtonLink>
          </Catalog>
        ))}
      </List>
    </Container>
  </Section>
);
