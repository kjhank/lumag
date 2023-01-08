import { useOrphans } from '@/hooks';
import { Container } from '../Container/Container';
import {
  Figure,
  Heading, Image, Section, Text,
} from './Certificates.styled';
import { CertificatesProps } from './Certificates.types';

export const Certificates = ({
  caption, heading, image, text,
}: CertificatesProps) => (
  <Section>
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
