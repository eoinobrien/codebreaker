import classnames from 'classnames';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  color: string;
  size?: 'medium' | 'small';
  className?: string;
}

export const Keyboard = ({
  color,
  size = 'medium',
  className,
}: KeyboardProps) => {
  var keyboardClasses = classnames(
    styles.keyboard,
    { [styles.small]: size === 'small' },
    className,
  );
  return (
    <div className={keyboardClasses} style={{ backgroundColor: color }}></div>
  );
};
