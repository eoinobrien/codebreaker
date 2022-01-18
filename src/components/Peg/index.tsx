import classnames from 'classnames';
import styles from './Peg.module.css';

interface PegProps {
  color: string;
  size?: 'medium' | 'small';
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
}

export const Peg = ({
  color,
  size = 'medium',
  className,
  children,
}: PegProps) => {
  var pegClasses = classnames(
    styles.peg,
    { [styles.small]: size === 'small' },
    className,
  );
  return (
    <div
      className={pegClasses}
      style={{ backgroundColor: color }}
      aria-label={color}
    >
      {children !== undefined && size !== 'small' && children}
    </div>
  );
};
