import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  keyIsCorrectGuess,
  keysFromGuess,
  createGameSettings,
  encodeGameSettings,
  GameSettings,
  getOrCreateGame,
  backspace,
  pushGuess,
} from 'logic';
import { Guess, KeyboardActions, PegColor } from 'models';
import { Game } from 'components/Game';

export const GameRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gameSettings, setGameSettings] = useState<GameSettings>(
    getOrCreateGame(searchParams),
  );
  const [code, setCode] = useState<PegColor[]>(gameSettings.code);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<PegColor[]>([]);
  const [gameComplete, setGameComplete] = useState<boolean>(false);

  useEffect(() => {
    setGameComplete(
      guesses.length >= gameSettings.totalNumberOfGuesses ||
        keyIsCorrectGuess(
          guesses.at(-1)?.keys ?? [],
          gameSettings.numberOfPegs,
        ),
    );
  }, [guesses, gameSettings.totalNumberOfGuesses, gameSettings.numberOfPegs]);

  useEffect(() => {
    setSearchParams({ code: encodeGameSettings(gameSettings) });
    setCode(gameSettings.code);
  }, [guesses, gameSettings, setSearchParams]);

  const newGame = () => {
    setGameSettings(createGameSettings());
    setGameComplete(false);
    setGuesses([]);
    setCurrentGuess([]);
  };

  const callback = (action: KeyboardActions, color?: PegColor) => {
    switch (action) {
      case KeyboardActions.ColorPicker:
        if (color !== undefined && !gameComplete) {
          let result = pushGuess(
            [...currentGuess],
            gameSettings.numberOfPegs,
            color,
          );

          setCurrentGuess(result.guess);
        }
        break;

      case KeyboardActions.Backspace:
        let result = backspace([...currentGuess]);
        setCurrentGuess(result.guess);
        break;

      case KeyboardActions.Enter:
        if (!gameComplete) {
          if (currentGuess.length === gameSettings.numberOfPegs) {
            let guessToAdd: Guess = {
              code: currentGuess,
              keys: keysFromGuess(code, currentGuess),
              currentGuess: false,
            };
            let cloneGuesses = [...guesses];

            cloneGuesses.push(guessToAdd);
            setGuesses(cloneGuesses);

            setCurrentGuess([]);
          }
        } else {
          // TODO
        }
        break;

      default:
        alert('Go tell Eoin how did you get here!');
        break;
    }
  };

  return (
      <Game
        code={code}
        gameComplete={gameComplete}
        numberOfPegs={gameSettings.numberOfPegs}
        totalNumberOfGuesses={gameSettings.totalNumberOfGuesses}
        numberOfColors={gameSettings.numberOfColors}
        currentGuess={currentGuess}
        guesses={guesses}
        newGameCallback={newGame}
        keyboardCallback={callback}
      />
  );
};