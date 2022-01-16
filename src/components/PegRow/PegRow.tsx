import { PegColor, PegSlot } from "../../models";
import { EmptyPeg } from "../EmptyPeg/EmptyPeg";
import { HiddenPeg } from "../HiddenPeg/HiddenPeg";
import { Peg } from "../Peg/Peg";
import styles from "./PegRow.module.css";

interface PegRowProps {
  slots: PegSlot[];
}

export const PegRow = ({ slots }: PegRowProps) => {
  return (
    <div className={styles.pegRow}>
      {slots.map((peg, index) => {
        if (peg.color === PegColor.Blank) {
          return <EmptyPeg key={index} className={styles.pegRowPeg} />;
        }

        if (peg.color === PegColor.Hidden) {
          return <HiddenPeg key={index} className={styles.pegRowPeg} />;
        }

        return (
          <Peg key={index} className={styles.pegRowPeg} color={peg.color} />
        );
      })}
    </div>
  );
};
