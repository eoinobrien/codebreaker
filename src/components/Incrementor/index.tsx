import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import styles from './Incrementor.module.css';

interface IncrementorProps {
  initialValue: number;
  min?: number;
  max?: number;
}

export const Incrementor = ({
  initialValue,
  min = 1,
  max = 10,
}: IncrementorProps) => {
  const [value, setValue] = useState<number>(initialValue);

  return (
    <div className={styles.incrementor}>
      <button onClick={() => setValue(value - 1)} disabled={value <= min}>
        <FiMinus />
      </button>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)} disabled={value >= max}>
        <FiPlus />
      </button>
    </div>
  );
};
