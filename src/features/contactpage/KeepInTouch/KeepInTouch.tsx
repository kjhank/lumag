import sanitize from 'sanitize-html';
import React from 'react';
import { Container } from '@/components';
import {
  Content, List, Map, Section,
} from './KeepInTouch.styled';
import { KeepInTouchProps } from './KeepInTouch.types';
import { sanitizeConfig } from '@/utils/globalConfigs';

export const KeepInTouch = ({ contactData }: KeepInTouchProps) => (
  <Section>
    <Container>
      <List id="padTarget">
        {contactData.map(location => (
          <React.Fragment key={location.mapsSrc}>
            <Content
              html={sanitize(location.content, sanitizeConfig)}
            />
            <Map src={location.mapsSrc} />
          </React.Fragment>
        ))}
      </List>
    </Container>
  </Section>
);
