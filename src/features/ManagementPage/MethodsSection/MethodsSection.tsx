import { Container, TextWithMedia } from '@/components';
import { List, Section } from './MethodsSection.styled';
import { MethodsSectionProps } from './MethodsSection.types';

export const MethodsSection = ({ items }: MethodsSectionProps) => (
  <Section>
    <Container>
      <List>
        {items.map(item => <TextWithMedia key={item.heading} {...item} />)}
      </List>
    </Container>
  </Section>
);
