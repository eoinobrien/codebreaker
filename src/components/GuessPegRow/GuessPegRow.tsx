import classnames from 'classnames';
import { Key, PegColor } from 'models';
import { KeyGrid } from 'components/KeyGrid';
import { PegRow } from 'components/PegRow';
import styles from './GuessPegRow.module.css';
import { useEffect, useRef } from 'react';

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
  currentGuess = false,
}: GuessPegRowProps) => {
  const guessPegRowRef = useRef<HTMLDivElement>(null);
  var guessPegRowClass = classnames(styles.guessPegRow, {
    [styles.currentGuess]: currentGuess,
  });

  useEffect(() => {
    if (currentGuess) {
      guessPegRowRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [code, currentGuess]);

  return (
    <div className={guessPegRowClass} ref={guessPegRowRef}>
      <PegRow code={code} numberOfPegs={numberOfPegs} showIcons={showIcons} />
      <KeyGrid keys={keys} numberOfPegs={numberOfPegs} />
    </div>
  );
};
