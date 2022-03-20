import { useContext } from 'react';
import Form from 'components/Form';
import { Switch } from 'components/Switch';
import { PegColor } from 'models';
import { Peg } from 'components/Peg';
import styles from './Settings.module.css';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { SettingsTypes } from 'reducers/settingsReducer';
import { Trans, useTranslation } from 'react-i18next';

export const Settings = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  const { t } = useTranslation();

  const pegColors: PegColor[] = [PegColor.Red, PegColor.Blue, PegColor.Green];
  const getPegs = (showIcons: boolean) => {
    return pegColors.map((p, index) => (
      <Peg key={index} color={p} ariaLabel={PegColor[p]} showIcon={showIcons} />
    ));
  };

  return (
    <div className={styles.settings}>
      <Form.Group id="showIcons" label={t('settingsModal.showIcons')}>
        <Switch
          id="showIcons"
          value={state.settings.showIcons}
          options={[
            <div>
              <p>{t('settingsModal.showIconsLabelsArray.0')}</p>
              {getPegs(true)}
            </div>,
            <div>
              <p>{t('settingsModal.showIconsLabelsArray.1')}</p>
              {getPegs(false)}
            </div>,
          ]}
          onChange={(newValue) =>
            dispatch({
              type: SettingsTypes.SetShowIcons,
              payload: { showIcons: newValue },
            })
          }
        />
      </Form.Group>
      <Form.Group id="colorScheme" label={t('settingsModal.colorScheme')}>
        <Switch
          id="colorScheme"
          value={state.settings.colorScheme}
          options={[
            t('settingsModal.colorSchemeArray.0'),
            t('settingsModal.colorSchemeArray.1'),
            t('settingsModal.colorSchemeArray.2'),
          ]}
          onChange={(newValue) =>
            dispatch({
              type: SettingsTypes.SetColorScheme,
              payload: { colorScheme: newValue },
            })
          }
        />
      </Form.Group>
      <p>
        <Trans i18nKey="settingsModal.ownerText">
          A small game created by{' '}
          <a href="https://eoinobrien.ie">Eoin O'Brien</a>.
        </Trans>
      </p>
    </div>
  );
};
