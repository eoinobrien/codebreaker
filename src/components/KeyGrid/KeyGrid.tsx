import { PegColor, Key } from "../../models";
import { EmptyPeg } from "../EmptyPeg/EmptyPeg";
import { Peg } from "../Peg/Peg";
import styles from "./KeyGrid.module.css";

interface KeyGridProps {
  keys: Key[];
}

export const KeyGrid = ({ keys }: KeyGridProps) => {
  let numberOfColumns: number = Math.ceil(keys.length / 2);

  return (
    <div className={styles.keyGrid} style={{gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`}}>
      {keys.map((key, index) => {
        let keyColor: PegColor =
          key === Key.RightColorRightSlot
            ? PegColor.Red
            : key === Key.RightColorWrongSlot
            ? PegColor.White
            : PegColor.Blank;

        if (keyColor === PegColor.Blank) {
          return (
            <EmptyPeg key={index} className={styles.keyGridPeg} size="small" />
          );
        }

        return (
          <Peg
            key={index}
            className={styles.keyGridPeg}
            size="small"
            color={keyColor}
          />
        );
      })}
    </div>
  );
};
