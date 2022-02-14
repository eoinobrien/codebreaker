import React, {
  createContext,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

export enum ShowIconsState {
  Show = 0,
  Hide = 1,
}

export enum ColorSchemeState {
  Light = 0,
  Dark = 1,
  SystemDefault = 2,
}

type SettingsValues = {
  showIcons: ShowIconsState;
  colorScheme: ColorSchemeState;
};

type Settings = {
  setShowIcons: Dispatch<SetStateAction<ShowIconsState>>;
  setColorScheme: Dispatch<SetStateAction<ColorSchemeState>>;
} & SettingsValues;

const SettingsContext = createContext<Settings>({} as Settings);

const initialState: SettingsValues = JSON.parse(
  localStorage.getItem('Settings') as string,
) || {
  showIcons: ShowIconsState.Hide,
  colorScheme: ColorSchemeState.SystemDefault,
};

const SettingsContextProvider: React.FC = ({ children }) => {
  const [showIcons, setShowIcons] = useState<ShowIconsState>(
    initialState.showIcons,
  );
  const [colorScheme, setColorScheme] = useState<ColorSchemeState>(
    initialState.colorScheme,
  );

  useEffect(() => {
    localStorage.setItem(
      'Settings',
      JSON.stringify({
        showIcons: showIcons,
        colorScheme: colorScheme,
      } as SettingsValues),
    );
  }, [showIcons, colorScheme]);

  return (
    <SettingsContext.Provider
      value={{
        showIcons,
        setShowIcons,
        colorScheme,
        setColorScheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContextProvider, SettingsContext };
