import { Container } from '@/components';
import { CoverImage, SectionHeading } from '@/components/styled';
import { useOrphans } from '@/hooks';
import { CircleCutout } from '@/static';
import { getIcon } from '@/utils';
import {
  Figure, Label, List, Section,
} from './WhyDifferent.styled';
import {
  IconProps, WhyDifferentProps,
} from './WhyDifferent.types';

const Item = ({ icon }: IconProps) => {
  const IconComponent = getIcon(icon.iconslug);
  const parsedText = useOrphans(icon.text, / wg /);

  return (
    <li key={icon.iconslug}>
      <Figure>
        <IconComponent />
        <CircleCutout />
        <Label>{parsedText}</Label>
      </Figure>
    </li>
  );
};

export const WhyDifferent = ({
  background, heading, iconsList,
}: WhyDifferentProps) => (
  <Section>
    <CoverImage imageData={background} />
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <List>
        {iconsList.map(icon => <Item icon={icon} key={icon.iconslug} />)}
      </List>
    </Container>
  </Section>
);
