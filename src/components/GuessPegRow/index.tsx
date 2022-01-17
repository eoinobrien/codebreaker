import classnames from 'classnames';
import { Key, PegColor } from '../../models';
import { KeyGrid } from '../KeyGrid';
import { PegRow } from '../PegRow';
import styles from './GuessPegRow.module.css';

interface GuessPegRowProps {
  code: PegColor[];
  keys: Key[];
  currentGuess?: boolean;
}

export const GuessPegRow = ({ code, keys, currentGuess = false }: GuessPegRowProps) => {
  var guessPegRowClass = classnames(
    styles.guessPegRow,
    { [styles.currentGuess]: currentGuess },
  );

  return (
    <div className={guessPegRowClass}>
      <PegRow code={code} />
      <KeyGrid
        keys={
          keys.length === 0
            ? [Key.WrongColor, Key.WrongColor, Key.WrongColor, Key.WrongColor]
            : keys
        }
      />
    </div>
  );
};
