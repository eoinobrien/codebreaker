import { Key, PegSlot } from "../../models";
import { KeyGrid } from "../KeyGrid/KeyGrid";
import { PegRow } from "../PegRow/PegRow";
import styles from "./GuessPegRow.module.css";

interface GuessPegRowProps {
  slots: PegSlot[];
  keys: Key[];
}

export const GuessPegRow = ({ slots , keys}: GuessPegRowProps) => {
  return (
    <div className={styles.guessPegRow}>
      <PegRow slots={slots} />
      <KeyGrid keys={keys}/>
    </div>
  );
};
