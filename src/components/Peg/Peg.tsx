import classnames from 'classnames';
import { getPegStyling } from 'logic';
import { PegColor } from 'models';
import styles from './Peg.module.css';

interface PegProps {
  color: PegColor;
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
    className,
    styles.peg,
    { [styles.small]: size === 'small' },
    { [styles.light]: light },
  );

  let pegStyling = getPegStyling.get(color);

  return (
    <div
      className={pegClasses}
      style={{ backgroundColor: pegStyling?.color ?? '#000', borderColor: pegStyling?.borderColor ?? '#333' }}
      aria-label={ariaLabel}
    >
      {children !== undefined && size !== 'small' && children}
    </div>
  );
};
