import { GuessPegRow } from 'components/GuessPegRow';
import { Keyboard } from 'components/Keyboard';
import { Peg } from 'components/Peg';
import { PegRow } from 'components/PegRow';
import { getPegStyling } from 'logic';
import { Key, PegColor, PegColorsArray } from 'models';
import styles from './Instructions.module.css';

export const Instructions = () => {
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
      <PegRow code={secretCode} numberOfPegs={secretCode.length} hideCode />
      <p>
        You do this by entering a guess that you thing the secret code might be.
      </p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red]}
        keys={[]}
        numberOfPegs={secretCode.length}
      />
      <p>
        After each guess a decryption key will be returned to help you crack the
        code.
      </p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red, PegColor.Yellow, PegColor.Orange]}
        keys={[Key.RightColorWrongSlot]}
        numberOfPegs={secretCode.length}
      />
      <p>
        Each item in decryption key represents one of the pegs in your guess
        guess.
      </p>
      <p>
        If a key is Red{' '}
        <Peg
          size="small"
          color={PegColor.Red}
        />{' '}
        it means that one of the pegs in your guess is both in the secret code
        and in the correct place.
      </p>
      <p>
        While a White key{' '}
        <Peg
          size="small"
          color={PegColor.White}
        />{' '}
        means that the one of your guesses is in the code but is in the incorrect place.
      </p>
      <p>
        After each guess you will learn more information about the secret code.
      </p>
      <GuessPegRow
        code={[PegColor.Purple, PegColor.Yellow, PegColor.Blue, PegColor.Black]}
        keys={[Key.RightColorRightSlot, Key.RightColorWrongSlot, Key.RightColorWrongSlot]}
        numberOfPegs={secretCode.length}
      />
      <p>All you have to do is keep guessing until you have broken the code.</p>
    </div>
  );
};
