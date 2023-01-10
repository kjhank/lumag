import { Container, InfoGrid } from '@/components';
import { CoverImage, SectionHeading } from '@/components/styled';
import { Section, Text } from './Goals.styled';
import { GoalsProps } from './Goals.types';

export const Goals = ({
  background, finePrint, heading, list,
}: GoalsProps) => (
  <Section>
    <CoverImage imageData={background} />
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Text>{finePrint}</Text>
      <InfoGrid items={list.map(({ text }) => text)} />
    </Container>
  </Section>
);
