import classnames from 'classnames';
import styles from './Peg.module.css';

interface PegProps {
  color: string;
  size?: 'medium' | 'small';
  className?: string;
}

export const Peg = ({ color, size = 'medium', className }: PegProps) => {
  var pegClasses = classnames(
    styles.peg,
    { [styles.small]: size === 'small' },
    className,
  );
  return <div className={pegClasses} style={{ backgroundColor: color }}></div>;
};
