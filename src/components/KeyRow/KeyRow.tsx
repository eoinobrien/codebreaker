import { createArrayOfObject } from 'logic';
import { PegColor, Key } from 'models';
import { Peg } from 'components/Peg';
import styles from './KeyRow.module.css';

interface KeyRowProps {
  keys: Key[];
  numberOfPegs: number;
}

export const KeyRow = ({ keys, numberOfPegs }: KeyRowProps) => {
  let pegIndexes = createArrayOfObject(0, numberOfPegs - keys.length);

  return (
    <div className={styles.keyRow}>
      {keys.map((key, index) => {
        let keyColor: PegColor =
          key === Key.RightColorRightSlot
            ? PegColor.Red
            : key === Key.RightColorWrongSlot
            ? PegColor.White
            : PegColor.Blank;

        return <Peg key={index} size="small" color={keyColor} />;
      })}

      {pegIndexes.map((_, index) => {
        return <Peg key={index} size="small" color={PegColor.Blank} />;
      })}
    </div>
  );
};
