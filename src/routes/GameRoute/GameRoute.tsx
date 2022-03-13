import { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as Component from 'components/Game';
import { ShowIconsState } from 'reducers/settingsReducer';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { GameTypes } from 'reducers/gamesReducer';
import { Game, GameState } from 'models';
import {
  BASE64_ALPHABET,
  createCode,
  decodeGameSettings,
  DEFAULT_GAME_SETTINGS,
  encodeGameSettings,
} from 'logic';

export const GameRoute = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  const navigate = useNavigate();
  let location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paramGameSettings = searchParams.get('code');
    let game: Game;

    if (paramGameSettings) {
      const encodedGameSettings = paramGameSettings.substring(1);
      game = state.games.pastGames[encodedGameSettings];

      if (!game) {
        console.warn(
          'Game was not found in storage, creating a new game from settings',
        );

        const { code, settings } = decodeGameSettings(encodedGameSettings);
        game = {
          code: code,
          currentGuess: [],
          gameState: GameState.Ongoing,
          guesses: [],
          settings: settings,
        };
      }
    } else {
      game = {
        code: createCode(DEFAULT_GAME_SETTINGS),
        currentGuess: [],
        gameState: GameState.Ongoing,
        guesses: [],
        settings: DEFAULT_GAME_SETTINGS,
      };
    }

    dispatch({
      type: GameTypes.LoadGame,
      payload: { game },
    });
  }, [searchParams, state.games.pastGames, dispatch]);

  useEffect(() => {
    // if (location.pathname === '/') {
    const encodedGameSettings = encodeGameSettings(
      state.games.currentGame.code,
      state.games.currentGame.settings,
    );

    const paramCode = searchParams.get('code');
    if (
      !paramCode ||
      (paramCode && paramCode.substring(1) !== encodedGameSettings)
    ) {
      const invalidEncodedGameSettings = `${
        BASE64_ALPHABET[Math.floor(Math.random() * BASE64_ALPHABET.length)]
      }${encodedGameSettings}`;

      setSearchParams({
        code: invalidEncodedGameSettings,
      });
    }
    // }
  }, [
    location.pathname,
    state.games.currentGame,
    searchParams,
    setSearchParams,
  ]);

  useEffect(() => {
    if (!state.settings.instructionsShown) {
      navigate(`/how-to-play?code=${searchParams.get('code')}`, {
        state: { backgroundLocation: location },
      });
    }
  }, [location, navigate, state.settings.instructionsShown]);

  useEffect(() => {
    if (state.games.currentGame.gameState !== GameState.Ongoing) {
      navigate(`/end?code=${searchParams.get('code')}`, {
        state: { backgroundLocation: location },
      });
    }
  }, [location, navigate, state.games.currentGame.gameState]);

  return (
    <Component.Game
      code={state.games.currentGame.code}
      gameState={state.games.currentGame.gameState}
      numberOfPegs={state.games.currentGame.settings.numberOfPegs}
      totalNumberOfGuesses={
        state.games.currentGame.settings.totalNumberOfGuesses
      }
      numberOfColors={state.games.currentGame.settings.numberOfColors}
      currentGuess={state.games.currentGame.currentGuess}
      guesses={state.games.currentGame.guesses}
      showIcons={state.settings.showIcons === ShowIconsState.Show}
      location={location}
    />
  );
};
