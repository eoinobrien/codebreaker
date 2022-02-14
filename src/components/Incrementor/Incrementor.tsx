import { Button } from 'components/Button';
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
      <Button onClick={() => onChange(value - 1)} disabled={value <= min} className={styles.button}>
        <FiMinus />
      </Button>
      <div>{value}</div>
      <Button onClick={() => onChange(value + 1)} disabled={value >= max} className={styles.button}>
        <FiPlus />
      </Button>
    </div>
  );
};
