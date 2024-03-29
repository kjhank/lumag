import { Container, MiniCarousel } from '@/components';
import { CoverImage } from '@/components/styled';
import { CircleCutout } from '@/static';
import { IconSlug } from '@/types';
import { getIcon } from '@/utils';
import {
  Figure, Item, Label, List, Section,
} from './InnovationSection.styled';
import { InnovationSectionProps } from './InnovationSection.types';

export const InnovationSection = ({
  background, iconsList, miniCarousel,
}: InnovationSectionProps) => (
  <Section>
    <CoverImage imageData={background} />
    <Container>
      <List>
        {iconsList?.length > 0 && iconsList.map(icon => {
          const Icon = getIcon(icon.iconSlug as IconSlug);

          return (
            (
              <Item key={icon.iconSlug}>
                <Figure>
                  <div>
                    <Icon />
                    <CircleCutout className="circle-cutout" />
                  </div>
                  <Label>{icon.text}</Label>
                </Figure>
              </Item>
            )
          );
        })}
      </List>
      <MiniCarousel {...miniCarousel} className="innovation-carousel" />
    </Container>
  </Section>
);
