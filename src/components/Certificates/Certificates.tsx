import { useOrphans } from '@/hooks';
import { Container } from '../Container/Container';
import { SectionHeading } from '../styled';
import {
  Background, Figure, Image,
  Section, Text,
} from './Certificates.styled';
import { CertificatesProps } from './Certificates.types';

export const Certificates = ({
  background, caption, heading, image, text,
}: CertificatesProps) => {
  const parsedText = useOrphans(text);

  return (
    <Section>
      {background && <Background imageData={background} />}
      <Container>
        <SectionHeading>{heading}</SectionHeading>
        <Text>{parsedText}</Text>
        <Figure>
          <Image imageData={image} />
          {caption && <figcaption>{caption.replaceAll('<br />', '')}</figcaption>}
        </Figure>
      </Container>
    </Section>
  );
};
