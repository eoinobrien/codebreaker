import { createArrayOfObject } from 'logic';
import { Guess, PegColor } from 'models';
import { GuessPegRow } from 'components/GuessPegRow';
import styles from './GuessBoard.module.css';

interface GuessBoardProps {
  currentGuess: PegColor[];
  guesses: Guess[];
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  gameComplete: boolean;
}

export const GuessBoard = ({
  currentGuess,
  guesses,
  numberOfPegs,
  totalNumberOfGuesses,
  gameComplete,
}: GuessBoardProps) => {
  let remainingGuessesIndexes = createArrayOfObject(
    0,
    totalNumberOfGuesses - guesses.length - (gameComplete ? 0 : 1),
  );

  return (
    <div className={styles.guessBoard}>
      {guesses.map((guess, index) => (
        <GuessPegRow key={index} numberOfPegs={numberOfPegs} {...guess} />
      ))}

      {/* Current Guess */}
      {!gameComplete && (
        <GuessPegRow
          key={guesses.length}
          numberOfPegs={numberOfPegs}
          code={currentGuess}
          currentGuess
        />
      )}

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
