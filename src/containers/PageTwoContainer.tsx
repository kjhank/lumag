import React from 'react';

import { Container } from '@/components';

import {
  StyledLink, Text, Wrapper,
} from '@/components/styled';

export const PageTwoContainer = () => (
  <Wrapper>
    <Container>
      <h1>Hello there</h1>
      <Text>
        This is another page.
        {' '}
        <StyledLink to="/">Click here</StyledLink>
        {' '}
        to go home.
      </Text>
    </Container>
  </Wrapper>
);
