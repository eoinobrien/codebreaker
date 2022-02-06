import classnames from 'classnames';
import { Key, PegColor } from 'models';
import { KeyGrid } from 'components/KeyGrid';
import { PegRow } from 'components/PegRow';
import styles from './GuessPegRow.module.css';

interface GuessPegRowProps {
  code: PegColor[];
  keys?: Key[];
  numberOfPegs: number;
  showIcons: boolean;
  currentGuess?: boolean;
}

export const GuessPegRow = ({
  code,
  keys = [],
  numberOfPegs,
  showIcons,
  currentGuess = false
}: GuessPegRowProps) => {
  var guessPegRowClass = classnames(styles.guessPegRow, {
    [styles.currentGuess]: currentGuess,
  });

  return (
    <div className={guessPegRowClass}>
      <PegRow code={code} numberOfPegs={numberOfPegs} showIcons/>
      <KeyGrid keys={keys} numberOfPegs={numberOfPegs} />
    </div>
  );
};
