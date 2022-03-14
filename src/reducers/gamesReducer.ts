import { encodeGameSettings, keyIsCorrectGuess, keysFromGuess } from 'logic';
import { Game, GameState, PegColor } from 'models';
import { GlobalActions } from './globalReducer';
import { ActionMap } from './helpers';

export enum GameTypes {
  LoadGame = 'LOAD_GAME',
  SaveGame = 'SAVE_GAME',

  AddGuess = 'ADD_GUESS',
  Backspace = 'BACKSPACE_GUESS',
  Enter = 'ENTER_GUESS',

  EndScreenShown = 'END_SCREEN_SHOWN',
}

export type GamesStateType = {
  currentGame: Game;
  pastGames: { [code: string]: Game };
};

type GamesPayload = {
  [GameTypes.LoadGame]: {
    game: Game;
  };
  [GameTypes.SaveGame]: {
    game: Game;
  };
  [GameTypes.AddGuess]: { colors: PegColor[] };
  [GameTypes.Backspace]: { colors: PegColor[] };
  [GameTypes.Enter]: {};
  [GameTypes.EndScreenShown]: { endScreenShownState: boolean };
};

export type GamesActions =
  ActionMap<GamesPayload>[keyof ActionMap<GamesPayload>];

export const gamesReducer = (
  state: GamesStateType,
  action: GlobalActions,
): GamesStateType => {
  switch (action.type) {
    case GameTypes.LoadGame:
      if (state.currentGame.guesses.length > 0) {
        state.pastGames[
          encodeGameSettings(state.currentGame.code, state.currentGame.settings)
        ] = state.currentGame;
      }

      state.currentGame = action.payload.game;

      return state;
    case GameTypes.SaveGame:
      if (action.payload.game.guesses.length > 0) {
        state.pastGames[
          encodeGameSettings(
            action.payload.game.code,
            action.payload.game.settings,
          )
        ] = action.payload.game;
      }
      return state;
    case GameTypes.AddGuess:
    case GameTypes.Backspace:
      state.currentGame.currentGuess = action.payload.colors;
      return state;
    case GameTypes.Enter:
      if (
        state.currentGame.currentGuess.length ===
        state.currentGame.settings.numberOfPegs
      ) {
        state.currentGame.guesses.push({
          code: state.currentGame.currentGuess,
          keys: keysFromGuess(
            state.currentGame.code,
            state.currentGame.currentGuess,
          ),
        });

        // If over the total number of guesses, or current guess is correct
        if (
          state.currentGame.guesses.length >=
            state.currentGame.settings.totalNumberOfGuesses ||
          keyIsCorrectGuess(
            state.currentGame.guesses[state.currentGame.guesses.length - 1]
              ?.keys ?? [],
            state.currentGame.settings.numberOfPegs,
          )
        ) {
          state.currentGame.gameState = keyIsCorrectGuess(
            state.currentGame.guesses[state.currentGame.guesses.length - 1]
              ?.keys ?? [],
            state.currentGame.settings.numberOfPegs,
          )
            ? GameState.Win
            : GameState.Loss;
        }

        state.currentGame.currentGuess = [];
      }
      return state;
    case GameTypes.EndScreenShown:
      state.currentGame.settings.endScreenShown = action.payload.endScreenShownState;
      return state;
    default:
      return state;
  }
};
