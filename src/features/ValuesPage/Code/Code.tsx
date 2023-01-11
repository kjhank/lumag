import { ButtonLink, Container } from '@/components';
import { Section, Text } from './Code.styled';
import { CodeProps } from './Code.types';

export const Code = ({
  buttonText, file, heading,
}: CodeProps) => (
  <Section>
    <Container>
      <Text>{heading}</Text>
      <ButtonLink download to={file.url}>
        {buttonText}
      </ButtonLink>
    </Container>
  </Section>
);
