import classnames from 'classnames';
import styles from './EmptyPeg.module.css';

interface EmptyPegProps {
  size?: 'medium' | 'small';
  className?: string;
}

export const EmptyPeg = ({ size = 'medium', className }: EmptyPegProps) => {
  var emptyPegClasses = classnames(
    styles.emptyPeg,
    { [styles.small]: size === 'small' },
    className,
  );
  var holeClasses = classnames(styles.pegHole, {
    [styles.pegHoleSmall]: size === 'small',
  });
  return (
    <div className={emptyPegClasses}>
      <div className={holeClasses}></div>
    </div>
  );
};
