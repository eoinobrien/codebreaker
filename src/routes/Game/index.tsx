import React from 'react';
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
  const [code, setCode] = useState<PegColor[]>(createCode(4));
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<PegColor[]>([]);
  const numberOfPegs = 4;
  const totalNumberOfGuesses = 10;

  React.useEffect(() => {}, []);

  const callback = (action: KeyboardActions, color?: PegColor) => {
    switch (action) {
      case KeyboardActions.ColorPicker:
        console.log('pciker');
        if (color !== undefined) {
          let result = pushGuess([...currentGuess], numberOfPegs, color);

          setCurrentGuess(result.guess);
        }
        break;
      case KeyboardActions.Backspace:
        console.log('backspace');
        let result = backspace([...currentGuess]);
        setCurrentGuess(result.guess);
        break;
      case KeyboardActions.Enter:
        console.log('enter');
        if (guesses.length < totalNumberOfGuesses) {
          let guessToAdd: Guess = {
            code: currentGuess,
            keys: keysFromGuess(code, currentGuess),
            currentGuess: false,
          };
          let cloneGuesses = [...guesses];
          cloneGuesses.push(guessToAdd);
          setGuesses(cloneGuesses);
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

  // const newGame = () => {
  //   setCode
  // }

  return (
    <div>
      {/* <button onClick={() => newGame}>New Game</button> */}
      <PlayingBoard
        code={code}
        currentGuess={currentGuess}
        guesses={guesses}
        numberOfPegs={numberOfPegs}
        totalNumberOfGuesses={totalNumberOfGuesses}
        hideCode={
          guesses === undefined ||
          !keyIsCorrectGuess(guesses.at(-1)?.keys ?? [], numberOfPegs)
        }
      />
      <Keyboard colors={AllowedColors} callback={callback} />
    </div>
  );
};
