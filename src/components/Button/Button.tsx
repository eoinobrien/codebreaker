import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: (...args: any) => void;
  children: ReactNode;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  onClick,
  children,
  secondary,
  disabled = false,
  className,
}: ButtonProps) => {
  let buttonClasses = classnames(
    styles.button,
    {
      [styles.secondary]: secondary,
    },
    className,
  );
  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
};
