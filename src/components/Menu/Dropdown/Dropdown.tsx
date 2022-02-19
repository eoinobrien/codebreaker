import classnames from 'classnames';
import { ReactNode } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  items: ReactNode[];
  open: boolean;
  alignRight?: boolean;
}

export const Dropdown = ({ items, open, alignRight }: DropdownProps) => {
  const dropdownClasses = classnames(
    styles.dropdown,
    {
      [styles.alignRight]: alignRight,
    },
    { [styles.open]: open },
  );

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
