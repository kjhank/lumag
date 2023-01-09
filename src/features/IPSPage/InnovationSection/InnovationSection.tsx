import { Container, MiniCarousel } from '@/components';
import { CircleCutout } from '@/static';
import { IconSlug } from '@/types';
import { getIcon } from '@/utils';
import {
  Background, Figure, Item, Label, List, Section,
} from './InnovationSection.styled';
import { InnovationSectionProps } from './InnovationSection.types';

export const InnovationSection = ({
  background, iconsList, miniCarousel,
}: InnovationSectionProps) => (
  <Section>
    <Background imageData={background} />
    <Container>
      <List>
        {iconsList.map(icon => {
          const Icon = getIcon(icon.iconSlug as IconSlug);

          return (
            (
              <Item key={icon.label}>
                <Figure>
                  <Icon />
                  <CircleCutout className="circle-cutout" />
                  <Label>{icon.text}</Label>
                </Figure>
              </Item>
            )
          );
        })}
      </List>
      <MiniCarousel {...miniCarousel} />
    </Container>
  </Section>
);
