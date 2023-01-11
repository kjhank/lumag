import { Container, InfoGrid } from '@/components';
import { CoverImage, SectionHeading } from '@/components/styled';
import { FinePrint, Section } from './Tools.styled';
import { ToolsProps } from './Tools.types';

export const Tools = ({
  background, finePrint, heading, list,
}: ToolsProps) => (
  <Section>
    <CoverImage imageData={background} />
    <Container>
      <SectionHeading>
        {heading}
      </SectionHeading>
      <InfoGrid items={list.map(({ text }) => text)} />
      <FinePrint>
        {finePrint}
      </FinePrint>
    </Container>
  </Section>
);
