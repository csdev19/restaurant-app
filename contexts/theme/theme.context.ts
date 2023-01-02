import { ThemeContextProps } from '@contexts/theme/theme.types';
import { createContext } from 'react';

const ThemeContext = createContext<ThemeContextProps>(null);

export default ThemeContext;
