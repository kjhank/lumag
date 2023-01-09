import { ButtonLink, Container } from '@/components';
import { SectionHeading } from '@/components/styled';
import {
  Background, Section, Text,
} from './CoopSection.styled';
import { CoopSectionProps } from './CoopSection.types';

export const CoopSection = ({
  background, heading, linkText, post, text,
}: CoopSectionProps) => (
  <Section>
    <Background imageData={background} />
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Text>{text}</Text>
      <ButtonLink to={`/${post.post_name}`}>{linkText}</ButtonLink>
    </Container>
  </Section>
);
