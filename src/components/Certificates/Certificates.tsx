import { useOrphans } from '@/hooks';
import { Container } from '../Container/Container';
import {
  Background,
  Figure,
  Heading, Image, Section, Text,
} from './Certificates.styled';
import { CertificatesProps } from './Certificates.types';

export const Certificates = ({
  background, caption, heading, image, text,
}: CertificatesProps) => (
  <Section>
    {background && <Background imageData={background} /> }
    <Container>
      <Heading>{heading}</Heading>
      <Text>{useOrphans(text)}</Text>
      <Figure>
        <Image imageData={image} />
        <figcaption>{caption.replaceAll('<br />', '')}</figcaption>
      </Figure>
    </Container>
  </Section>
);
