import { ReactNode } from 'react';
import styles from './Group.module.css';

interface GroupProps {
  label?: string;
  children: ReactNode | ReactNode[];
  id: string;
}

export const Group = ({ label, children, id }: GroupProps) => {
  return (
    <div className={styles.group}>
      <label htmlFor={id} className={styles.label}>
        <h2>{label}</h2>
      </label>
      <div className={styles.spacer}></div>
      <div id={id} className={styles.children}>
        {children}
      </div>
    </div>
  );
};
