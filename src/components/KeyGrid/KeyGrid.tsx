import { Color, Key, PegSlot } from "../../models";
import { Peg } from "../Peg/Peg";
import styles from "./KeyGrid.module.css";

interface KeyGridProps {
  keys: Key[];
}

export const KeyGrid = ({ keys }: KeyGridProps) => {
  return (
    <div className={styles.keyGrid}>
      {keys.map((key, index) => {
        let keyColor: Color =
          key === Key.RightColorRightSlot
            ? Color.Red
            : key === Key.RightColorWrongSlot
            ? Color.White
            : Color.Blank;

        let peg: PegSlot = { color: keyColor };
        return (
          <Peg
            key={index}
            className={styles.keyGridPeg}
            size="small"
            {...peg}
          />
        );
      })}
    </div>
  );
};
