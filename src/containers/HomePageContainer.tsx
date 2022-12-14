import React from 'react';

import { Container } from '@/components';

import {
  StyledLink, Text, Wrapper,
} from '@/components/styled';

export const HomePageContainer = () => (
  <Wrapper>
    <Container>
      <h1>Hello there</h1>
      <Text>
        This is a Gatsby + Styled Components starter.
        {' '}
        <StyledLink to="/page-two">Click here</StyledLink>
        {' '}
        to go to the second page.
      </Text>
    </Container>
  </Wrapper>
);
