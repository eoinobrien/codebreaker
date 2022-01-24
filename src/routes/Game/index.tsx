import { useEffect, useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import { GuessBoard } from '../../components/GuessBoard';
import { IconButton } from '../../components/IconButton';
import { Keyboard } from '../../components/Keyboard';
import { PegRow } from '../../components/PegRow';
import {
  AllowedColors,
  keyIsCorrectGuess,
  keysFromGuess,
} from '../../logic/codes';
import {
  createGameSettings,
  decodeGameSettings,
  encodeGameSettings,
  GameSettings,
} from '../../logic/game';
import { backspace, pushGuess } from '../../logic/keyboard';
import { Guess, KeyboardActions, PegColor } from '../../models';
import styles from './Game.module.css';

export const Game = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gameSettings] = useState<GameSettings>(
    searchParams.has('code')
      ? decodeGameSettings(searchParams.get('code') ?? '')
      : createGameSettings(),
  );
  const [code] = useState<PegColor[]>(gameSettings.code);
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
    setSearchParams({ code: encodeGameSettings(gameSettings) });
  }, [guesses, gameSettings, setSearchParams]);

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
          onClick={() => alert('new game')}
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
          colors={AllowedColors}
          numberOfPegs={gameSettings.numberOfPegs}
          callback={callback}
        />
      </div>
    </div>
  );
};
