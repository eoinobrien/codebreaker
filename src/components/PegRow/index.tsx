import { PegColor } from '../../models';
import { EmptyPeg } from '../EmptyPeg';
import { HiddenPeg } from '../HiddenPeg';
import { Peg } from '../Peg';
import styles from './PegRow.module.css';

interface PegRowProps {
  code: PegColor[];
}

export const PegRow = ({ code }: PegRowProps) => {
  return (
    <div className={styles.pegRow}>
      {code.map((pegColor, index) => {
        if (pegColor === PegColor.Blank) {
          return <EmptyPeg key={index} className={styles.pegRowPeg} />;
        }

        if (pegColor === PegColor.Hidden) {
          return <HiddenPeg key={index} className={styles.pegRowPeg} />;
        }

        return (
          <Peg key={index} className={styles.pegRowPeg} color={pegColor} />
        );
      })}
    </div>
  );
};
