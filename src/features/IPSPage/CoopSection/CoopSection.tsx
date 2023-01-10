import { useContext } from 'react';
import { ButtonLink, Container } from '@/components';
import { SectionHeading } from '@/components/styled';
import {
  Background, Section, Text,
} from './CoopSection.styled';
import { CoopSectionProps } from './CoopSection.types';
import { AppContext } from '@/components/Layout/Layout.context';

export const CoopSection = (
  {
    background, heading, linkText, post, text,
  }: CoopSectionProps
) => {
  const { urlPrefix } = useContext(AppContext);

  return (
    (
      <Section>
        <Background imageData={background} />
        <Container>
          <SectionHeading>{heading}</SectionHeading>
          <Text>{text}</Text>
          <ButtonLink to={`${urlPrefix}/${post.post_name}`}>{linkText}</ButtonLink>
        </Container>
      </Section>
    )
  );
};
