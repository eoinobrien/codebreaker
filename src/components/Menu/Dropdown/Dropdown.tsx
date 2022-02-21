import classnames from 'classnames';
import { ReactNode, useCallback, useEffect } from 'react';
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
    <ul className={dropdownClasses}>
      {items.map((item, index) => {
        return (
          <li className={styles.dropdownItem} key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
