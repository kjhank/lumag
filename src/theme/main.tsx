import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ThemeProps } from './theme.types';

const theme: DefaultTheme = {
  colors: {
    // color declarations go here
    brand: '#234669',
  },
  fonts: {
    heading: 'serif',
    text: 'sans-serif',
    // font declarations go here
  },
  transitions: {
    default: '0.4s',
  },
};

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
