import { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
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

export const GameRoute = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  let location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const encodedGameSettings = searchParams.get('code');
    let newGamePayload = {
      code: createCode(DEFAULT_GAME_SETTINGS),
      settings: DEFAULT_GAME_SETTINGS,
    };

    if (encodedGameSettings) {
      newGamePayload = decodeGameSettings(encodedGameSettings.substring(1));
    }

    dispatch({
      type: GameTypes.NewGame,
      payload: newGamePayload,
    });
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      const encodedGameSettings = encodeGameSettings(
        state.games.currentGame.code,
        state.games.currentGame.settings,
      );

      const paramCode = searchParams.get('code');
      if (paramCode && paramCode.substring(1) !== encodedGameSettings) {
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
    state.games.currentGame.code,
    state.games.currentGame.settings,
    searchParams,
    setSearchParams,
  ]);

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
