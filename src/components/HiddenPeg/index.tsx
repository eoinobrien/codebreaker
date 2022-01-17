import classnames from 'classnames';
import styles from './HiddenPeg.module.css';

interface HiddenPegProps {
  className?: string;
}

export const HiddenPeg = ({ className }: HiddenPegProps) => {
  var hiddenPegClasses = classnames(styles.hiddenPeg, className);
  return (
    <div className={hiddenPegClasses}>
      <div className={styles.hiddenIcon}></div>
    </div>
  );
};
