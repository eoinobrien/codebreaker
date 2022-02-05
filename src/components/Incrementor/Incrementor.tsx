import { FiMinus, FiPlus } from 'react-icons/fi';
import styles from './Incrementor.module.css';

interface IncrementorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
}

export const Incrementor = ({
  value,
  min = 1,
  max = 10,
  onChange,
}: IncrementorProps) => {
  return (
    <div className={styles.incrementor}>
      <button onClick={() => onChange(value - 1)} disabled={value <= min}>
        <FiMinus />
      </button>
      <div>{value}</div>
      <button onClick={() => onChange(value + 1)} disabled={value >= max}>
        <FiPlus />
      </button>
    </div>
  );
};
