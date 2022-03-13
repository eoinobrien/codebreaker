import { createArrayOfObject } from 'logic';
import { GameState, Guess, PegColor } from 'models';
import { GuessPegRow } from 'components/GuessPegRow';
import styles from './GuessBoard.module.css';

interface GuessBoardProps {
  currentGuess: PegColor[];
  guesses: Guess[];
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  gameState: GameState;
  showIcons: boolean;
}

export const GuessBoard = ({
  currentGuess,
  guesses,
  numberOfPegs,
  totalNumberOfGuesses,
  gameState,
  showIcons,
}: GuessBoardProps) => {
  let remainingGuessesIndexes = createArrayOfObject(
    0,
    totalNumberOfGuesses - guesses.length - (gameState !== GameState.Ongoing ? 0 : 1),
  );

  return (
    <div className={styles.guessBoard}>
      {guesses.map((guess, index) => (
        <GuessPegRow
          key={index}
          numberOfPegs={numberOfPegs}
          showIcons={showIcons}
          {...guess}
        />
      ))}

      {/* Current Guess */}
      {!gameState && (
        <GuessPegRow
          key={guesses.length}
          numberOfPegs={numberOfPegs}
          code={currentGuess}
          showIcons={showIcons}
          currentGuess
        />
      )}

      {/* Fill remainder of Game board with number of attempts left */}
      {remainingGuessesIndexes.map((_, index) => (
        <GuessPegRow
          key={index + guesses.length + 1}
          numberOfPegs={numberOfPegs}
          code={[]}
          showIcons={showIcons}
        />
      ))}
    </div>
  );
};
