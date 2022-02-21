import { GlobalActions } from './globalReducer';
import { ActionMap } from './helpers';

export enum SettingsTypes {
  SetShowIcons = 'SET_SHOW_ICONS',
  SetColorScheme = 'SET_COLOR_SCHEME',
}

export enum ShowIconsState {
  Show = 0,
  Hide = 1,
}

export enum ColorSchemeState {
  Light = 0,
  Dark = 1,
  SystemDefault = 2,
}

export type SettingsStateType = {
  showIcons: ShowIconsState;
  colorScheme: ColorSchemeState;
};

type SettingsPayload = {
  [SettingsTypes.SetShowIcons]: {
    showIcons: ShowIconsState;
  };
  [SettingsTypes.SetColorScheme]: {
    colorScheme: ColorSchemeState;
  };
};

export type SettingsActions =
  ActionMap<SettingsPayload>[keyof ActionMap<SettingsPayload>];

export const settingsReducer = (
  state: SettingsStateType,
  action: GlobalActions,
) => {
  switch (action.type) {
    case SettingsTypes.SetShowIcons:
      state.showIcons = action.payload.showIcons;
      return state;
    case SettingsTypes.SetColorScheme:
      state.colorScheme = action.payload.colorScheme;
      return state;
    default:
      return state;
  }
};
