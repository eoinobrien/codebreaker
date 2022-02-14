import { createContext, Dispatch, SetStateAction } from 'react';

export enum ShowIconsState {
  Show = 0,
  Hide = 1,
}
export enum ColorSchemeState {
  Light = 0,
  Dark = 1,
  SystemDefault = 2,
}

export type Settings = {
  showIcons: ShowIconsState;
  setShowIcons: Dispatch<SetStateAction<ShowIconsState>>;
  colorScheme: ColorSchemeState;
  setColorScheme: Dispatch<SetStateAction<ColorSchemeState>>;
};

export const SettingsContext = createContext<Settings>({
  showIcons: ShowIconsState.Hide,
  setShowIcons: () => {},
  colorScheme: ColorSchemeState.SystemDefault,
  setColorScheme: () => {},
});
