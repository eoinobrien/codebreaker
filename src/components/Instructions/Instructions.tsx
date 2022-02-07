import { GuessPegRow } from 'components/GuessPegRow';
import { Peg } from 'components/Peg';
import { PegRow } from 'components/PegRow';
import { Key, PegColor, PegColorsArray } from 'models';
import styles from './Instructions.module.css';

interface InstructionsProps {
  showIcons?: boolean;
}

export const Instructions = ({ showIcons = false }: InstructionsProps) => {
  const secretCode: PegColor[] = [
    PegColor.Black,
    PegColor.Blue,
    PegColor.Purple,
    PegColor.Green,
  ];
  const numberOfColors = 8;

  return (
    <div className={styles.instructions}>
      <h1>How to Play</h1>
      <p>The goal of Mastermind is to crack the secret code.</p>
      <div className={styles.hiddenRow}>
        <PegRow
          code={secretCode}
          numberOfPegs={secretCode.length}
          hideCode
          showIcons
        />
      </div>
      <p>
        You do this by entering a guess that you think the secret code might be.
      </p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red]}
        keys={[]}
        numberOfPegs={secretCode.length}
        showIcons
      />
      <p>
        After each guess you will be given a decryption key to help you crack the
        code.
      </p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red, PegColor.Yellow, PegColor.Orange]}
        keys={[Key.RightColorWrongSlot]}
        numberOfPegs={secretCode.length}
        showIcons
      />
      <p>
        Each item in decryption key stands for one of the pegs in your guess.
      </p>
      <p>
        If a key is Red, <Peg size="small" color={PegColor.Red} className={styles.singularKey} /> it means that
        one of the pegs in your guess is both in the secret code and in the
        correct place.
      </p>
      <p>
        While a White key <Peg size="small" color={PegColor.White} className={styles.singularKey} /> means that
        the one of your guesses is in the code but is in the incorrect place.
      </p>
      <p>
        After each guess you will learn more information about the secret code.
      </p>
      <GuessPegRow
        code={[PegColor.Purple, PegColor.Yellow, PegColor.Blue, PegColor.Black]}
        keys={[
          Key.RightColorRightSlot,
          Key.RightColorWrongSlot,
          Key.RightColorWrongSlot,
        ]}
        numberOfPegs={secretCode.length}
        showIcons
      />
      <p>Using these keys, keep guessing until you have cracked the code.</p>
    </div>
  );
};
