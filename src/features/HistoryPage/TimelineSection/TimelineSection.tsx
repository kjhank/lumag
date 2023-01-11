import { Container, Timeline } from '@/components';
import { SectionHeading } from '@/components/styled';
import { Section, Text } from './TimelineSection.styled';
import { TimelineSectionProps } from './TimelineSection.types';

export const TimelineSection = ({
  heading, list, text,
}: TimelineSectionProps) => (
  <Section>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Text>{text}</Text>
      <Timeline list={list} />
    </Container>
  </Section>
);
