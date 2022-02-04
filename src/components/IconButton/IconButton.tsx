import classnames from 'classnames';
import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import styles from './IconButton.module.css';

interface IconButtonProps {
  Icon: IconType;
  light?: boolean;
  size?: string | number;
  ariaLabel?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({
  Icon,
  light = false,
  size = '2rem',
  ariaLabel,
  onClick,
}: IconButtonProps) => {
  var iconClass = classnames(styles.iconButton, {
    [styles.light]: light,
  });
  return (
    <button className={iconClass} aria-label={ariaLabel} onClick={onClick}>
      <Icon size={size} />
    </button>
  );
};
