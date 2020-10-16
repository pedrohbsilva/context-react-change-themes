import React, { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import {
  light,
  dark,
  blueLight,
  grey,
  sapphire,
  yellow,
  BlueStrong,
} from '../styles/styles';

interface ThemeContextData {
  toggleTheme(): void;
  selectedTheme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(
    BlueStrong
  );

  const toggleTheme = useCallback(() => {
    const colorLocal = localStorage.getItem('title');
    switch (colorLocal) {
      case 'light':
        setSelectedTheme(light);
        break;
      case 'dark':
        setSelectedTheme(dark);
        break;
      case 'grey':
        setSelectedTheme(grey);
        break;
      case 'yellow':
        setSelectedTheme(yellow);
        break;
      case 'BlueStrong':
        setSelectedTheme(BlueStrong);
        break;
      case 'sapphire':
        setSelectedTheme(sapphire);
        break;
      case 'blueLight':
        setSelectedTheme(blueLight);
        break;
      default:
        setSelectedTheme(BlueStrong);
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme, selectedTheme }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useSwitchTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  return context;
}
