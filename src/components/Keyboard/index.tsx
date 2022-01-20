import { BsArrowReturnLeft, BsBackspace } from 'react-icons/bs';
import { KeyboardActions, PegColor } from '../../models';
import { PegButton } from '../PegButton';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  colors: PegColor[];
  numberOfPegs: number;
  callback: (action: KeyboardActions, color?: PegColor) => void;
}

export const Keyboard = ({ colors, numberOfPegs, callback }: KeyboardProps) => {
  return (
    <div className={styles.keyboard}>
      <div
        className={styles.colors}
        style={{ gridTemplateColumns: `repeat(${numberOfPegs}, 1fr)` }}
      >
        {colors.map((color, index) => (
          <PegButton
            key={index}
            color={color}
            ariaLabel={color}
            action={KeyboardActions.ColorPicker}
            onClick={callback}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <PegButton
          color={PegColor.KeyboardAction}
          light
          ariaLabel='Backspace'
          action={KeyboardActions.Backspace}
          onClick={callback}
        >
          <BsBackspace size="2rem" />
        </PegButton>
        <PegButton
          color={PegColor.KeyboardAction}
          light
          ariaLabel='Enter'
          action={KeyboardActions.Enter}
          onClick={callback}
        >
          <BsArrowReturnLeft size="2rem" />
        </PegButton>
      </div>
    </div>
  );
};
