import { Guess, Key, PegColor } from "../../models";
import { GuessBoard } from "../GuessBoard/GuessBoard";
import { PegRow } from "../PegRow/PegRow";
import styles from "./PlayingBoard.module.css";

interface PlayingBoardProps {
  code: PegColor[];
  guesses: Guess[];
  totalNumberOfGuesses: number;
}

export const PlayingBoard = ({
  code,
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
          guesses={guesses}
          totalNumberOfGuesses={totalNumberOfGuesses}
        />
      </div>
    </div>
  );
};
