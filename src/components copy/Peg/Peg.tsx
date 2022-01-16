import classnames from "classnames";
import { PegColor } from "../../models";
import styles from "./Peg.module.css";

interface PegProps {
  color: string;
  size: "medium" | "small";
}

export const Peg = ({ color, size }: PegProps) => {
  var pegClasses = classnames(styles.peg, { [styles.small]: size === "small" });
  return <div className={pegClasses} style={{ backgroundColor: color }}></div>;
};
