import { useEffect, useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import { GuessBoard } from 'components/GuessBoard';
import { IconButton } from 'components/IconButton';
import { Keyboard } from 'components/Keyboard';
import { PegRow } from 'components/PegRow';
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
import { Guess, KeyboardActions, PegColor, PegColorsArray } from 'models';
import styles from './Game.module.css';

export const Game = () => {
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
    <div className={styles.game}>
      <div className={styles.codeRow}>
        <PegRow
          code={code}
          hideCode={!gameComplete}
          numberOfPegs={gameSettings.numberOfPegs}
        />
        <IconButton
          Icon={BsFillPlusSquareFill}
          onClick={() => newGame()}
          light
        />
      </div>
      <div className={styles.guessBoard}>
        <GuessBoard
          currentGuess={currentGuess}
          guesses={guesses}
          numberOfPegs={gameSettings.numberOfPegs}
          totalNumberOfGuesses={gameSettings.totalNumberOfGuesses}
          gameComplete={gameComplete}
        />
      </div>
      <div className={styles.keyboard}>
        <Keyboard
          colors={PegColorsArray.slice(0, gameSettings.numberOfColors)}
          numberOfPegs={gameSettings.numberOfPegs}
          callback={callback}
        />
      </div>
    </div>
  );
};
