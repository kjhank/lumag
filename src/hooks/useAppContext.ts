import { useContext } from 'react';
import { AppContext } from '@/features/Layout/Layout.context';

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context) return context;

  throw new Error('no context found');
};
