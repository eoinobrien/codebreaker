import { PegColor, Key, PegSlot } from "../../models";
import { EmptyPeg } from "../EmptyPeg/EmptyPeg";
import { Peg } from "../Peg/Peg";
import styles from "./KeyGrid.module.css";

interface KeyGridProps {
  keys: Key[];
}

export const KeyGrid = ({ keys }: KeyGridProps) => {
  return (
    <div className={styles.keyGrid}>
      {keys.map((key, index) => {
        let keyColor: PegColor =
          key === Key.RightColorRightSlot
            ? PegColor.Red
            : key === Key.RightColorWrongSlot
            ? PegColor.White
            : PegColor.Blank;

        let peg: PegSlot = { color: keyColor };

        if (peg.color === PegColor.Blank) {
          return (
            <EmptyPeg key={index} className={styles.keyGridPeg} size="small" />
          );
        }

        return (
          <Peg
            key={index}
            className={styles.keyGridPeg}
            size="small"
            color={peg.color}
          />
        );
      })}
    </div>
  );
};
