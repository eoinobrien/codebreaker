import { Guess, Key, PegColor } from '../../models';
import { GuessBoard } from '../GuessBoard';
import { PegRow } from '../PegRow';
import styles from './PlayingBoard.module.css';

interface PlayingBoardProps {
  code: PegColor[];
  currentGuess: Guess;
  guesses: Guess[];
  totalNumberOfGuesses: number;
}

export const PlayingBoard = ({
  code,
  currentGuess,
  guesses,
  totalNumberOfGuesses,
}: PlayingBoardProps) => {
  return (
    <div className={styles.playingBoard}>
      <div className={styles.codeRow}>
        <PegRow code={code} />
      </div>
      <div>
        <GuessBoard
          currentGuess={currentGuess}
          guesses={guesses}
          totalNumberOfGuesses={totalNumberOfGuesses}
        />
      </div>
    </div>
  );
};
