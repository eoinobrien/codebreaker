import { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Game } from 'components/Game';
import { ShowIconsState } from 'reducers/settingsReducer';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { GameTypes } from 'reducers/gamesReducer';
import { BASE64_ALPHABET, createCode, decodeGameSettings, DEFAULT_GAME_SETTINGS, encodeGameSettings } from 'logic';

export const GameRoute = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  let location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const encodedGameSettings = searchParams.get('code');

    if (encodedGameSettings) {
      const validBase64Settings = decodeGameSettings(
        encodedGameSettings.substring(1),
      );
      dispatch({
        type: GameTypes.NewGame,
        payload: validBase64Settings,
      });
    } else {
      dispatch({
        type: GameTypes.NewGame,
        payload: {
          code: createCode(DEFAULT_GAME_SETTINGS),
          settings: DEFAULT_GAME_SETTINGS,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const encodedGameSettings = `${
        BASE64_ALPHABET[Math.floor(Math.random() * BASE64_ALPHABET.length)]
      }${encodeGameSettings(
        state.games.currentGame.code,
        state.games.currentGame.settings,
      )}`;

      // If the URL is not root (e.g. in a modal), don't change the URL.
      setSearchParams({
        code: encodedGameSettings,
      });
    }
  }, [
    state.games.currentGame.code,
    state.games.currentGame.settings,
    setSearchParams,
  ]);

  const newGame = () => {};

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
