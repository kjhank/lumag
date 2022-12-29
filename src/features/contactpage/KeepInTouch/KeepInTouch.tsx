import sanitize from 'sanitize-html';
import { Container } from '@/components';
import {
  Content, Item, List, Map, Section,
} from './KeepInTouch.styled';
import { KeepInTouchProps } from './KeepInTouch.types';
import { sanitizeConfig } from '@/utils/globalConfigs';

export const KeepInTouch = ({ contactData }: KeepInTouchProps) => (
  <Section>
    <Container>
      <List id="padTarget">
        {contactData.map(location => (
          <Item key={location.mapsSrc}>
            <Content
              html={sanitize(location.content, sanitizeConfig)}
            />
            <Map src={location.mapsSrc} />
          </Item>
        ))}
      </List>
    </Container>
  </Section>
);
