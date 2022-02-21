import classnames from 'classnames';
import { LegacyRef, ReactNode, useCallback, useEffect } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  items: ReactNode[];
  open: boolean;
  alignRight?: boolean;
  closeCallback: () => void;
}

export const Dropdown = ({
  items,
  open,
  alignRight,
  closeCallback,
}: DropdownProps) => {
  const dropdownClasses = classnames(
    styles.dropdown,
    {
      [styles.alignRight]: alignRight,
    },
    { [styles.open]: open },
  );

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        closeCallback();
      }
    },
    [closeCallback],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction);

    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  return (
    <div className={dropdownClasses}>
      {items.map((item, index) => {
        return (
          <div className={styles.dropdownItem} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
