import React from 'react';

import { Container } from '@/components';

import {
  StyledLink, Text, Wrapper,
} from '@/components/styled';

export const NotFoundContainer = () => (
  <Wrapper>
    <Container>
      <h1>Hello there</h1>
      <Text>
        This is a custom 404 page.
        {' '}
        <StyledLink to="/">Click here</StyledLink>
        {' '}
        to go home.
      </Text>
    </Container>
  </Wrapper>
);
