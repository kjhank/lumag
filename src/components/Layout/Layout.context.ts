import { createContext } from 'react';
import { AppContextState } from './Layout.types';

export const AppContext = createContext<AppContextState>({} as AppContextState);
