import { Key, PegColor } from "../../models";
import { KeyGrid } from "../KeyGrid/KeyGrid";
import { PegRow } from "../PegRow/PegRow";
import styles from "./GuessPegRow.module.css";

interface GuessPegRowProps {
  code: PegColor[];
  keys: Key[];
}

export const GuessPegRow = ({ code , keys}: GuessPegRowProps) => {
  return (
    <div className={styles.guessPegRow}>
      <PegRow code={code} />
      <KeyGrid keys={keys}/>
    </div>
  );
};
