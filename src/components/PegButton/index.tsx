import { pegHexColors } from '../../logic/pegs';
import { KeyboardActions, PegColor } from '../../models';
import { Peg } from '../Peg';
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
      onClick={() => onClick(action, PegColor[color as keyof typeof PegColor])}
    >
      <Peg color={pegHexColors.get(color) ?? '#F3E5F5'} light={light}>
        {children}
      </Peg>
    </button>
  );
};
