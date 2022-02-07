import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import styles from './IconButton.module.css';

interface IconButtonProps {
  Icon: IconType;
  size?: string | number;
  ariaLabel?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({
  Icon,
  size = '2rem',
  ariaLabel,
  onClick,
}: IconButtonProps) => {
  return (
    <button className={styles.iconButton} aria-label={ariaLabel} onClick={onClick}>
      <Icon size={size} />
    </button>
  );
};
