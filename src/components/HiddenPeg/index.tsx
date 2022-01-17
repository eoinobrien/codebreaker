import classnames from 'classnames';
import { BsFillPatchQuestionFill } from "react-icons/bs";
import styles from './HiddenPeg.module.css';

interface HiddenPegProps {
  className?: string;
}

export const HiddenPeg = ({ className }: HiddenPegProps) => {
  var hiddenPegClasses = classnames(styles.hiddenPeg, className);
  return (
    <div className={hiddenPegClasses}>
      <BsFillPatchQuestionFill size="2rem" />
    </div>
  );
};
