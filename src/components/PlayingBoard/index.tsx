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
  gameComplete: boolean;
}

export const PlayingBoard = ({
  code,
  currentGuess,
  guesses,
  numberOfPegs,
  totalNumberOfGuesses,
  gameComplete,
}: PlayingBoardProps) => {
  return (
    <div className={styles.playingBoard}>
      <div className={styles.codeRow}>
        <PegRow code={code} hideCode={!gameComplete} numberOfPegs={numberOfPegs}/>
      </div>
      <div>
        <GuessBoard
          currentGuess={currentGuess}
          guesses={guesses}
          numberOfPegs={numberOfPegs}
          totalNumberOfGuesses={totalNumberOfGuesses}
          gameComplete={gameComplete}
        />
      </div>
    </div>
  );
};
