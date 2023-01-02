import React from 'react';

export type ThemeContextProps = {
  themeState: ThemeState;
  themeDispatch: React.Dispatch<ThemeAction>;
};

export type Theme = 'dark' | 'light';

export type ThemeState = {
  theme: string;
};

export type ThemeAction = {
  payload: string;
  type: string;
};
