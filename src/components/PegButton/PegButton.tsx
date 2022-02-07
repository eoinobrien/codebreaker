import { KeyboardActions, PegColor } from 'models';
import { Peg } from 'components/Peg';
import styles from './PegButton.module.css';

interface PegButtonProps {
  color: PegColor;
  ariaLabel?: string;
  action: KeyboardActions;
  showIcon: boolean;
  onClick: (action: KeyboardActions, color?: PegColor) => void;
}

export const PegButton = ({
  color,
  ariaLabel,
  action,
  showIcon,
  onClick,
}: PegButtonProps) => {
  return (
    <button
      className={styles.pegButton}
      value={color}
      aria-label={ariaLabel}
      onClick={() => onClick(action, color)}
    >
      <Peg color={color} showIcon={showIcon} className={styles.peg} />
    </button>
  );
};
