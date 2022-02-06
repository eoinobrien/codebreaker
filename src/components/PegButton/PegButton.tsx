import { getPegStyling } from 'logic';
import { KeyboardActions, PegColor } from 'models';
import { Peg } from 'components/Peg';
import styles from './PegButton.module.css';

interface PegButtonProps {
  color: PegColor;
  light?: boolean;
  ariaLabel?: string;
  action: KeyboardActions;
  onClick: (action: KeyboardActions, color?: PegColor) => void;
  children?: React.ReactChild | React.ReactChild[];
}

export const PegButton = ({
  color,
  light,
  ariaLabel,
  action,
  onClick,
  children,
}: PegButtonProps) => {
  return (
    <button
      className={styles.pegButton}
      value={color}
      aria-label={ariaLabel}
      onClick={() => onClick(action, color)}
    >
      <Peg color={color} light={light}>
        {children}
      </Peg>
    </button>
  );
};
