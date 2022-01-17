import { Guess, Key, PegColor } from "../../models";
import { GuessPegRow } from "../GuessPegRow";
import styles from "./GuessBoard.module.css";

interface GuessBoardProps {
  currentGuess: Guess;
  guesses: Guess[];
  totalNumberOfGuesses: number;
}

export const GuessBoard = ({
  currentGuess,
  guesses,
  totalNumberOfGuesses,
}: GuessBoardProps) => {
  let localGuesses = [...guesses];
  let remainingGuesses = totalNumberOfGuesses - guesses.length;

  localGuesses.push(currentGuess);

  for (let i = 0; i < remainingGuesses; i++) {
    localGuesses.push({
      code: [PegColor.Blank, PegColor.Blank, PegColor.Blank, PegColor.Blank],
      keys: [Key.WrongColor, Key.WrongColor, Key.WrongColor, Key.WrongColor],
    });
  }

  return (
    <div className={styles.guessBoard}>
      {localGuesses.map((guess, index) => (
        <GuessPegRow key={index} {...guess} />
      ))}
    </div>
  );
};
