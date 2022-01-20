import { useState } from 'react';
import { Keyboard } from '../../components/Keyboard';
import { PlayingBoard } from '../../components/PlayingBoard';
import {
  AllowedColors,
  createCode,
  keyIsCorrectGuess,
  keysFromGuess,
} from '../../logic/codes';
import { backspace, pushGuess } from '../../logic/keyboard';
import { Guess, KeyboardActions, PegColor } from '../../models';

export const Game = () => {
  const [code] = useState<PegColor[]>(createCode(4));
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<PegColor[]>([]);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  
  const numberOfPegs = 4;
  const totalNumberOfGuesses = 10;

  const callback = (action: KeyboardActions, color?: PegColor) => {
    switch (action) {
      case KeyboardActions.ColorPicker:
        if (color !== undefined && !gameComplete) {
          let result = pushGuess([...currentGuess], numberOfPegs, color);

          setCurrentGuess(result.guess);
        }
        break;
      case KeyboardActions.Backspace:
        let result = backspace([...currentGuess]);
        setCurrentGuess(result.guess);
        break;
      case KeyboardActions.Enter:
        if (guesses.length < totalNumberOfGuesses) {
          let guessToAdd: Guess = {
            code: currentGuess,
            keys: keysFromGuess(code, currentGuess),
            currentGuess: false,
          };
          let cloneGuesses = [...guesses];

          cloneGuesses.push(guessToAdd);
          setGuesses(cloneGuesses);
          setGameComplete(keyIsCorrectGuess(guessToAdd.keys, numberOfPegs));

          setCurrentGuess([]);
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
    <div>
      <PlayingBoard
        code={code}
        currentGuess={currentGuess}
        guesses={guesses}
        numberOfPegs={numberOfPegs}
        totalNumberOfGuesses={totalNumberOfGuesses}
        hideCode={
          guesses === undefined ||
          !gameComplete ||
          guesses.length < totalNumberOfGuesses
        }
      />
      <Keyboard colors={AllowedColors} callback={callback} />
    </div>
  );
};
