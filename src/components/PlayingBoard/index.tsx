import { Guess, PegColor } from '../../models';
import { GuessBoard } from '../GuessBoard';
import { PegRow } from '../PegRow';
import styles from './PlayingBoard.module.css';

interface PlayingBoardProps {
  code: PegColor[];
  currentGuess: PegColor[];
  guesses: Guess[];
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  hideCode: boolean;
}

export const PlayingBoard = ({
  code,
  currentGuess,
  guesses,
  numberOfPegs,
  totalNumberOfGuesses,
  hideCode,
}: PlayingBoardProps) => {
  return (
    <div className={styles.playingBoard}>
      <div className={styles.codeRow}>
        <PegRow code={code} hideCode={hideCode} numberOfPegs={numberOfPegs}/>
      </div>
      <div>
        <GuessBoard
          currentGuess={currentGuess}
          guesses={guesses}
          numberOfPegs={numberOfPegs}
          totalNumberOfGuesses={totalNumberOfGuesses}
        />
      </div>
    </div>
  );
};
