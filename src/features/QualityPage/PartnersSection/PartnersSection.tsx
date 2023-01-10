import sanitize from 'sanitize-html';
import { Container } from '@/components';
import { SectionHeading } from '@/components/styled';
import {
  Partner, Partners, Section, Text,
} from './PartnersSection.styled';
import { PartnersSectionProps } from './PartnersSection.types';
import { sanitizeConfig } from '@/utils/globalConfigs';

export const PartnersSection = ({
  grayBoxes, heading, text,
}: PartnersSectionProps) => (
  <Section>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Text>{text}</Text>
      <Partners>
        {grayBoxes.map(box => (
          <Partner key={box.heading}>
            <h3>{box.heading}</h3>
            <p dangerouslySetInnerHTML={{
              __html: sanitize(box.text, {
                ...sanitizeConfig,
                allowedTags: sanitizeConfig?.allowedTags ? sanitizeConfig?.allowedTags?.filter((tag: string) => tag !== 'p') : [],
              }),
            }}
            />
          </Partner>
        ))}
      </Partners>
    </Container>
  </Section>
);