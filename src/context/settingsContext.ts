import { createContext, Dispatch, SetStateAction } from 'react';

export type Settings = {
  showIcons: boolean;
  setShowIcons: Dispatch<SetStateAction<boolean>>;
};

export const SettingsContext = createContext<Settings>({
  showIcons: false,
  setShowIcons: () => {},
});
