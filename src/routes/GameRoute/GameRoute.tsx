import { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Game } from 'components/Game';
import { ShowIconsState } from 'reducers/settingsReducer';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { GameTypes } from 'reducers/gamesReducer';
import {
  BASE64_ALPHABET,
  createCode,
  decodeGameSettings,
  DEFAULT_GAME_SETTINGS,
  encodeGameSettings,
} from 'logic';
import * as Models from 'models';

export const GameRoute = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  const navigate = useNavigate();
  let location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paramGameSettings = searchParams.get('code');
    let game: Models.Game;

    if (paramGameSettings) {
      const encodedGameSettings = paramGameSettings.substring(1);
      game = state.games.games[encodedGameSettings];

      if (!game) {
        console.warn(
          'Game was not found in storage, creating a new game from settings',
        );

        const { code, settings } = decodeGameSettings(encodedGameSettings);
        game = {
          code: code,
          currentGuess: [],
          gameComplete: false,
          guesses: [],
          settings: settings,
        };
      }
    } else {
      game = {
        code: createCode(DEFAULT_GAME_SETTINGS),
        currentGuess: [],
        gameComplete: false,
        guesses: [],
        settings: DEFAULT_GAME_SETTINGS,
      };
    }

    dispatch({
      type: GameTypes.LoadGame,
      payload: { game },
    });
  }, [searchParams, state.games.games, dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
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

        // If the URL is not root (e.g. in a modal), don't change the URL.
        setSearchParams({
          code: invalidEncodedGameSettings,
        });
      }
    }
  }, [
    location.pathname,
    state.games.currentGame,
    searchParams,
    setSearchParams,
  ]);

  useEffect(() => {
    const saveGameState = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      dispatch({
        type: GameTypes.SaveGame,
        payload: { game: state.games.currentGame },
      });
    };

    window.addEventListener('beforeunload', saveGameState);
    return () => {
      window.removeEventListener('beforeunload', saveGameState);
    };
  }, [state.games.currentGame, dispatch]);

  useEffect(() => {
    if (!state.settings.instructionsShown) {
      navigate('/how-to-play', {
        state: { backgroundLocation: location },
      });
    }
  }, [location, navigate, state.settings.instructionsShown]);

  return (
    <Game
      code={state.games.currentGame.code}
      gameComplete={state.games.currentGame.gameComplete}
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
