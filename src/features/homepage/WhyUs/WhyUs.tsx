import { WhyUsProps } from './WhyUs.types';

import {
  Figure, Heading, Item, Label, List, Section, Text,
} from './WhyUs.styled';
import { Container } from '@/components';

import { CircleCutout } from '@/static';
import { getIcon } from '@/utils';
import { CoverImage } from '@/components/styled';

export const WhyUs = ({ data }: WhyUsProps) => (
  <Section>
    {data?.background && <CoverImage imageData={data.background} />}
    <Container>
      <Heading>{data?.heading}</Heading>
      <Text>{data?.text}</Text>
      {data?.icons?.length > 0 && (
        <List>
          {data.icons.map(icon => {
            const Icon = getIcon(icon.svgSlug.value);

            return (
              <Item key={icon.label}>
                <Figure>
                  <Icon />
                  <CircleCutout />
                  <Label>
                    {icon.label}
                  </Label>
                </Figure>
              </Item>
            );
          })}
        </List>
      )}
    </Container>
  </Section>
);
