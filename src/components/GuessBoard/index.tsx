import { useEffect, useState } from 'react';
import { createArrayOfObject } from '../../logic/codes';
import { Guess, PegColor } from '../../models';
import { GuessPegRow } from '../GuessPegRow';
import styles from './GuessBoard.module.css';

interface GuessBoardProps {
  currentGuess: PegColor[];
  guesses: Guess[];
  numberOfPegs: number;
  totalNumberOfGuesses: number;
}

export const GuessBoard = ({
  currentGuess,
  guesses,
  numberOfPegs,
  totalNumberOfGuesses,
}: GuessBoardProps) => {
  let remainingGuessesIndexes = createArrayOfObject(
    0,
    totalNumberOfGuesses - guesses.length,
  );

  return (
    <div className={styles.guessBoard}>
      {guesses.map((guess, index) => (
        <GuessPegRow key={index} numberOfPegs={numberOfPegs} {...guess} />
      ))}

      {/* Current Guess */}
      <GuessPegRow
        key={guesses.length}
        numberOfPegs={numberOfPegs}
        code={currentGuess}
        currentGuess
      />

      {/* Fill remainder of Game board with number of attempts left */}
      {remainingGuessesIndexes.map((_, index) => (
        <GuessPegRow
          key={index + guesses.length + 1}
          numberOfPegs={numberOfPegs}
          code={[]}
        />
      ))}
    </div>
  );
};
