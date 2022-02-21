import { PegColor } from 'models';
import { Peg } from 'components/Peg';
import styles from './PegButton.module.css';

interface PegButtonProps {
  color: PegColor;
  ariaLabel?: string;
  showIcon: boolean;
  onClick: () => void;
}

export const PegButton = ({
  color,
  ariaLabel,
  showIcon,
  onClick,
}: PegButtonProps) => {
  return (
    <button
      className={styles.pegButton}
      value={color}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Peg color={color} showIcon={showIcon} className={styles.peg} />
    </button>
  );
};
