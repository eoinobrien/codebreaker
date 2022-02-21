import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import styles from './IconButton.module.css';

interface IconButtonProps {
  Icon: IconType;
  iconSize?: string | number;
  width?: string | number;
  height?: string | number;
  ariaLabel?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({
  Icon,
  iconSize = '2rem',
  width = '4rem',
  height = '4rem',
  ariaLabel,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={styles.iconButton}
      style={{
        width: width,
        height: height,
      }}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Icon size={iconSize} />
    </button>
  );
};
