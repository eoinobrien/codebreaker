import { createCode, DEFAULT_GAME_SETTINGS } from 'logic';
import { GameState } from 'models';
import { GamesActions, gamesReducer, GamesStateType } from './gamesReducer';
import {
  ColorSchemeState,
  SettingsActions,
  settingsReducer,
  SettingsStateType,
  ShowIconsState,
} from './settingsReducer';

export const CURRENT_VERSION_NUMBER = 1;

export type StateType = {
  version: number,
  settings: SettingsStateType;
  games: GamesStateType;
};

export const initialState = {
  version: CURRENT_VERSION_NUMBER,
  settings: {
    showIcons: ShowIconsState.Hide,
    colorScheme: ColorSchemeState.SystemDefault,
    instructionsShown: false,
  },
  games: {
    currentGame: {
      code: createCode(DEFAULT_GAME_SETTINGS),
      currentGuess: [],
      gameState: GameState.Ongoing,
      guesses: [],
      settings: DEFAULT_GAME_SETTINGS,
    },
    pastGames: {},
  },
};

export type GlobalActions = SettingsActions | GamesActions;

export const globalReducer = (
  { version, settings, games }: StateType,
  action: GlobalActions,
) => ({
  version: version,
  settings: settingsReducer(settings, action),
  games: gamesReducer(games, action),
});
