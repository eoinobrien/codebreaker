import classnames from 'classnames';
import { Key, PegColor } from '../../models';
import { KeyGrid } from '../KeyGrid';
import { PegRow } from '../PegRow';
import styles from './GuessPegRow.module.css';

interface GuessPegRowProps {
  code: PegColor[];
  keys?: Key[];
  numberOfPegs: number;
  currentGuess?: boolean;
}

export const GuessPegRow = ({
  code,
  keys = [],
  numberOfPegs,
  currentGuess = false,
}: GuessPegRowProps) => {
  var guessPegRowClass = classnames(styles.guessPegRow, {
    [styles.currentGuess]: currentGuess,
  });

  return (
    <div className={guessPegRowClass}>
      <PegRow code={code} numberOfPegs={numberOfPegs} />
      <KeyGrid keys={keys} numberOfPegs={numberOfPegs} />
    </div>
  );
};
