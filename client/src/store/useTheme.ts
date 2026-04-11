import { create } from 'zustand';
import themeConfig from './theme.config.json';

interface ThemeState {
  config: typeof themeConfig;
  setPrimaryColor: (color: string) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  config: themeConfig,
  setPrimaryColor: (color) => 
    set((state) => ({
      config: { ...state.config, colors: { ...state.config.colors, primaryGlow: color } }
    })),
}));