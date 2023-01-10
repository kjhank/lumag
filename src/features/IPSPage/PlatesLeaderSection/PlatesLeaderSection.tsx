import {
  Container, MiniCarousel, TextWithMedia,
} from '@/components';
import { Section } from './PlatesLeaderSection.styled';
import { PlatesLeaderSectionProps } from './PlatesLeaderSection.types';

export const PlatesLeaderSection = ({ carryPlate, europeanLeader }: PlatesLeaderSectionProps) => (
  <Section>
    <Container>
      <TextWithMedia {...carryPlate} />
      <MiniCarousel {...europeanLeader} noShift />
    </Container>
  </Section>
);
