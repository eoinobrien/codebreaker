import { KeyboardActions, PegColor } from '../../models';
import { Peg } from '../Peg';
import styles from './PegButton.module.css';

interface PegButtonProps {
  color: string;
  action: KeyboardActions
  onClick: (action: KeyboardActions, color?: PegColor) => void;
  children?: React.ReactChild | React.ReactChild[];
}

export const PegButton = ({
  color,
  action,
  onClick,
  children,
}: PegButtonProps) => { 
  return (
    <button className={styles.pegButton} value={color} onClick={() => onClick(action, PegColor[color as keyof typeof PegColor])}>
      <Peg color={color}>{children}</Peg>
    </button>
  );
};
