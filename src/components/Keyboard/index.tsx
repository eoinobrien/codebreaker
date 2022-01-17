import { PegColor } from '../../models';
import { Peg } from '../Peg';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  colors: PegColor[];
}

export const Keyboard = ({ colors }: KeyboardProps) => {
  return (
    <>
      {colors.map((color, index) => (
        <Peg key={index} className={styles.pegRowPeg} color={color} />
      ))}
    </>
  );
};
