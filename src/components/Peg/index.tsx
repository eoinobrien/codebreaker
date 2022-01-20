import classnames from 'classnames';
import styles from './Peg.module.css';

interface PegProps {
  color: string;
  size?: 'medium' | 'small';
  light?: boolean;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
}

export const Peg = ({
  color,
  size = 'medium',
  light = false,
  ariaLabel,
  className,
  children,
}: PegProps) => {
  var pegClasses = classnames(
    styles.peg,
    { [styles.small]: size === 'small' },
    { [styles.light]: light },
    className,
  );
  return (
    <div
      className={pegClasses}
      style={{ backgroundColor: color }}
      aria-label={ariaLabel}
    >
      {children !== undefined && size !== 'small' && children}
    </div>
  );
};
