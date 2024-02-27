import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GuessPegRow } from 'components/GuessPegRow';
import { Peg } from 'components/Peg';
import { PegRow } from 'components/PegRow';
import { Key, PegColor } from 'models';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { SettingsTypes, ShowIconsState } from 'reducers/settingsReducer';
import styles from './Instructions.module.css';

export const Instructions = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch({
      type: SettingsTypes.SetInstructionsShown,
      payload: { shown: true },
    });
  }, [  ]);

  const secretCode: PegColor[] = [
    PegColor.Black,
    PegColor.Blue,
    PegColor.Purple,
    PegColor.Green,
  ];

  return (
    <div className={styles.instructions}>
      <p>{t('instructionsModal.0')}</p>
      <div className={styles.hiddenRow}>
        <PegRow
          code={secretCode}
          numberOfPegs={secretCode.length}
          hideCode
          showIcons={state.settings.showIcons === ShowIconsState.Show}
        />
      </div>
      <p>{t('instructionsModal.1')}</p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red]}
        keys={[]}
        numberOfPegs={secretCode.length}
        showIcons={state.settings.showIcons === ShowIconsState.Show}
      />
      <p>{t('instructionsModal.2')}</p>
      <GuessPegRow
        code={[PegColor.Blue, PegColor.Red, PegColor.Yellow, PegColor.Orange]}
        keys={[Key.RightColorWrongSlot]}
        numberOfPegs={secretCode.length}
        showIcons={state.settings.showIcons === ShowIconsState.Show}
      />
      <p>{t('instructionsModal.3')}</p>
      <p>
        {t('instructionsModal.4')}
        <Peg
          as="span"
          size="small"
          color={PegColor.Red}
          className={styles.singularKey}
          showIcon={state.settings.showIcons === ShowIconsState.Show}
        />
        {t('instructionsModal.5')}
      </p>
      <p>
        {t('instructionsModal.6')}
        <Peg
          as="span"
          size="small"
          color={PegColor.White}
          className={styles.singularKey}
          showIcon={state.settings.showIcons === ShowIconsState.Show}
        />
        {t('instructionsModal.7')}
      </p>
      <p>{t('instructionsModal.8')}</p>
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
      <p>{t('instructionsModal.9')}</p>
    </div>
  );
};
