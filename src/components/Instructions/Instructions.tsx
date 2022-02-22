import { GuessPegRow } from 'components/GuessPegRow';
import { Peg } from 'components/Peg';
import { PegRow } from 'components/PegRow';
import { Key, PegColor } from 'models';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { useContext, useEffect } from 'react';
import { SettingsTypes, ShowIconsState } from 'reducers/settingsReducer';
import styles from './Instructions.module.css';

export const Instructions = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);

  useEffect(() => {
    dispatch({
      type: SettingsTypes.SetInstructionsShown,
      payload: { shown: true },
    });
  }, [dispatch]);

  const secretCode: PegColor[] = [
    PegColor.Black,
    PegColor.Blue,
    PegColor.Purple,
    PegColor.Green,
  ];

  return (
    <div className={styles.instructions}>
      <p>The goal of Mastermind is to crack the secret code.</p>
      <div className={styles.hiddenRow}>
        <PegRow
          code={secretCode}
          numberOfPegs={secretCode.length}
          hideCode
          showIcons={state.settings.showIcons === ShowIconsState.Show}
        />
      </div>
      <p>
        You do this by entering a guess that you think the secret code might be.
      </p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red]}
        keys={[]}
        numberOfPegs={secretCode.length}
        showIcons={state.settings.showIcons === ShowIconsState.Show}
      />
      <p>
        After each guess you will be given a decryption key to help you crack
        the code.
      </p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red, PegColor.Yellow, PegColor.Orange]}
        keys={[Key.RightColorWrongSlot]}
        numberOfPegs={secretCode.length}
        showIcons={state.settings.showIcons === ShowIconsState.Show}
      />
      <p>
        Each item in decryption key stands for one of the pegs in your guess.
      </p>
      <p>
        If a key is Red,{' '}
        <Peg
          as="span"
          size="small"
          color={PegColor.Red}
          className={styles.singularKey}
          showIcon={state.settings.showIcons === ShowIconsState.Show}
        />{' '}
        it means that one of the pegs in your guess is both in the secret code
        and in the correct place.
      </p>
      <p>
        While a White key{' '}
        <Peg
          as="span"
          size="small"
          color={PegColor.White}
          className={styles.singularKey}
          showIcon={state.settings.showIcons === ShowIconsState.Show}
        />{' '}
        means that the one of your guesses is in the code but is in the
        incorrect place.
      </p>
      <p>
        After each guess you will learn more information about the secret code.
      </p>
      <GuessPegRow
        code={[PegColor.Purple, PegColor.Yellow, PegColor.Blue, PegColor.Black]}
        keys={[
          Key.RightColorRightSlot,
          Key.RightColorWrongSlot,
          Key.RightColorWrongSlot,
        ]}
        numberOfPegs={secretCode.length}
        showIcons={state.settings.showIcons === ShowIconsState.Show}
      />
      <p>Using these keys, keep guessing until you have cracked the code.</p>
    </div>
  );
};
