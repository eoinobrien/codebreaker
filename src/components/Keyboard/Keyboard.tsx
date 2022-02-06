import { BsArrowReturnLeft, BsBackspace } from 'react-icons/bs';
import { KeyboardActions, PegColor } from 'models';
import { PegButton } from 'components/PegButton';
import styles from './Keyboard.module.css';
import { SettingsContext } from 'context/settingsContext';
import { useContext } from 'react';
import { getIcon } from 'components/PegIconChooser';

interface KeyboardProps {
  colors: PegColor[];
  numberOfPegs: number;
  callback: (action: KeyboardActions, color?: PegColor) => void;
}

export const Keyboard = ({ colors, numberOfPegs, callback }: KeyboardProps) => {
  let { showIcons } = useContext(SettingsContext);
  const halfWayIndex = Math.ceil(colors.length / 2);

  const firstHalfOfColors = colors.slice(0, halfWayIndex);
  const secondHalfOfColors = colors.slice(halfWayIndex);

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardLine}>
        {firstHalfOfColors.map((color, index) => {
          return (
            <PegButton
              key={index}
              color={color}
              ariaLabel={PegColor[color]}
              action={KeyboardActions.ColorPicker}
              onClick={callback}
            >
              {getIcon(color, showIcons)}
            </PegButton>
          );
        })}

        <PegButton
          color={PegColor.KeyboardAction}
          light
          ariaLabel="Backspace"
          action={KeyboardActions.Backspace}
          onClick={callback}
        >
          <BsBackspace size="2rem" />
        </PegButton>
      </div>
      <div className={styles.keyboardLine}>
        {secondHalfOfColors.map((color, index) => (
          <PegButton
            key={index}
            color={color}
            ariaLabel={PegColor[color]}
            action={KeyboardActions.ColorPicker}
            onClick={callback}
          >
            {getIcon(color, showIcons)}
          </PegButton>
        ))}

        <PegButton
          color={PegColor.KeyboardAction}
          light
          ariaLabel="Enter"
          action={KeyboardActions.Enter}
          onClick={callback}
        >
          <BsArrowReturnLeft size="2rem" />
        </PegButton>
      </div>
    </div>
  );
};
