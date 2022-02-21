import { createCode, DEFAULT_GAME_SETTINGS } from 'logic';
import { Game } from 'models';
import { GamesActions, gamesReducer, GamesStateType } from './gamesReducer';
import {
  ColorSchemeState,
  SettingsActions,
  settingsReducer,
  SettingsStateType,
  ShowIconsState,
} from './settingsReducer';

export type StateType = {
  settings: SettingsStateType;
  games: GamesStateType;
};

export const initialState = {
  settings: {
    showIcons: ShowIconsState.Hide,
    colorScheme: ColorSchemeState.SystemDefault,
  },
  games: {
    currentGame: {
      code: createCode(),
      currentGuess: [],
      gameComplete: false,
      guesses: [],
      settings: DEFAULT_GAME_SETTINGS,
    },
    games: {}
  },
};

export type GlobalActions = SettingsActions | GamesActions;

export const globalReducer = (
  { settings, games }: StateType,
  action: GlobalActions,
) => ({
  settings: settingsReducer(settings, action),
  games: gamesReducer(games, action),
});
