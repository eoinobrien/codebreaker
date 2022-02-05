import { ChangeEvent, ReactNode } from 'react';
import styles from './Switch.module.css';

interface SwitchProps {
  id: string;
  value: boolean;
  onLabel: string | ReactNode;
  offLabel: string | ReactNode;
  onChange: (newValue: boolean) => void;
}

export const Switch = ({
  id,
  value,
  onLabel,
  offLabel,
  onChange,
}: SwitchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === 'true');
  };

  return (
    <div className={styles.switch}>
      <input
        type="radio"
        id={`${id}-off`}
        name={id}
        value="false"
        onChange={handleChange}
        checked={!value}
      />
      <label htmlFor={`${id}-off`} className={styles.label}>
        {offLabel}
      </label>
      <input
        type="radio"
        id={`${id}-on`}
        name={id}
        value="true"
        onChange={handleChange}
        checked={value}
      />
      <label htmlFor={`${id}-on`} className={styles.label}>
        {onLabel}
      </label>
    </div>
  );
};
