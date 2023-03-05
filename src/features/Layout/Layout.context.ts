import { createContext } from 'react';
import { AppContextState } from './Layout.types';

export const AppContext = createContext<AppContextState>({
  siteUrl: 'https://lumag.pl',
} as AppContextState);
