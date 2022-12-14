import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: string
    }
    fonts: {
      heading: string;
      text: string;
    }
    transitions: {
      fast?: string;
      default: string;
      slow?: string;
    }
  }
}
