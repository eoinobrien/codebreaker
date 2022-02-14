import { KeyboardActions, PegColor } from 'models';
import { PegButton } from 'components/PegButton';
import styles from './Keyboard.module.css';
import { useCallback, useEffect } from 'react';

interface KeyboardProps {
  colors: PegColor[];
  numberOfPegs: number;
  showIcons: boolean;
  callback: (action: KeyboardActions, color?: PegColor) => void;
}

export const Keyboard = ({ colors, numberOfPegs, showIcons, callback }: KeyboardProps) => {
  const halfWayIndex = Math.ceil(colors.length / 2);

  const firstHalfOfColors = colors.slice(0, halfWayIndex);
  const secondHalfOfColors = colors.slice(halfWayIndex);

  const backspaceFunction = useCallback((event) => {
    if (event.keyCode === 8) {
      callback(KeyboardActions.Backspace, PegColor.KeyboardBackspace);
    }
  }, [callback]);

  const enterFunction = useCallback((event) => {
    if (event.keyCode === 13) {
      callback(KeyboardActions.Enter, PegColor.KeyboardEnter);
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener('keydown', enterFunction);
    document.addEventListener('keydown', backspaceFunction);

    return () => {
      document.removeEventListener('keydown', enterFunction);
      document.removeEventListener('keydown', backspaceFunction);
    };
  }, [enterFunction, backspaceFunction]);

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
              showIcon={showIcons}
            />
          );
        })}

        <PegButton
          color={PegColor.KeyboardBackspace}
          ariaLabel="Backspace"
          action={KeyboardActions.Backspace}
          onClick={callback}
          showIcon
        />
      </div>
      <div className={styles.keyboardLine}>
        {secondHalfOfColors.map((color, index) => (
          <PegButton
            key={index}
            color={color}
            ariaLabel={PegColor[color]}
            action={KeyboardActions.ColorPicker}
            onClick={callback}
            showIcon={showIcons}
          />
        ))}

        <PegButton
          color={PegColor.KeyboardEnter}
          ariaLabel="Enter"
          action={KeyboardActions.Enter}
          onClick={callback}
          showIcon
        />
      </div>
    </div>
  );
};
