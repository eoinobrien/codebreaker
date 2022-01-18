import { BsArrowReturnLeft, BsBackspace } from 'react-icons/bs';
import { KeyboardActions, PegColor } from '../../models';
import { PegButton } from '../PegButton';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  colors: PegColor[];
  callback: (action: KeyboardActions, color?: PegColor) => void;
}

export const Keyboard = ({ colors, callback }: KeyboardProps) => {
  return (
    <div className={styles.keyboard}>
      <div>
        {colors.map((color, index) => (
          <PegButton
            key={index}
            color={color}
            action={KeyboardActions.ColorPicker}
            onClick={callback}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <PegButton
          color="lightgrey"
          action={KeyboardActions.Backspace}
          onClick={callback}
        >
          <BsBackspace size="2rem" />
        </PegButton>
        <PegButton
          color="lightgrey"
          action={KeyboardActions.Enter}
          onClick={callback}
        >
          <BsArrowReturnLeft size="2rem" />
        </PegButton>
      </div>
    </div>
  );
};
