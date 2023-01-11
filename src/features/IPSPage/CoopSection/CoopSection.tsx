import { ButtonLink, Container } from '@/components';
import { CoverImage, SectionHeading } from '@/components/styled';
import {
  Section, Text,
} from './CoopSection.styled';
import { CoopSectionProps } from './CoopSection.types';
import { useAppContext } from '@/hooks';

export const CoopSection = (
  {
    background, heading, linkText, post, text,
  }: CoopSectionProps
) => {
  const { urlPrefix } = useAppContext();

  return (
    (
      <Section>
        <CoverImage imageData={background} />
        <Container>
          <SectionHeading>{heading}</SectionHeading>
          <Text>{text}</Text>
          <ButtonLink to={`${urlPrefix}${post.post_name}`}>{linkText}</ButtonLink>
        </Container>
      </Section>
    )
  );
};
