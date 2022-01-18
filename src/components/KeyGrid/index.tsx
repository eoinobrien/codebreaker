import { createArrayOfObject } from '../../logic/codes';
import { PegColor, Key } from '../../models';
import { EmptyPeg } from '../EmptyPeg';
import { Peg } from '../Peg';
import styles from './KeyGrid.module.css';

interface KeyGridProps {
  keys: Key[];
  numberOfPegs: number;
}

export const KeyGrid = ({ keys, numberOfPegs }: KeyGridProps) => {
  let numberOfColumns: number = Math.ceil(numberOfPegs / 2);
  let pegIndexes = createArrayOfObject(0, numberOfPegs - keys.length);

  return (
    <div
      className={styles.keyGrid}
      style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
    >
      {keys.map((key, index) => {
        let keyColor: PegColor =
          key === Key.RightColorRightSlot
            ? PegColor.Red
            : key === Key.RightColorWrongSlot
            ? PegColor.White
            : PegColor.Blank;

        return (
          <Peg
            key={index}
            className={styles.keyGridPeg}
            size="small"
            color={keyColor}
          />
        );
      })}

      {pegIndexes.map((_, index) => {
        return (
          <EmptyPeg key={index} className={styles.keyGridPeg} size="small" />
        );
      })}
    </div>
  );
};