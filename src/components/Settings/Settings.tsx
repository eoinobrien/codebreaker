import { useContext } from 'react';
import Form from 'components/Form';
import { Switch } from 'components/Switch';
import { PegColor } from 'models';
import { Peg } from 'components/Peg';
import styles from './Settings.module.css';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { SettingsTypes } from 'reducers/settingsReducer';

export const Settings = () => {
  const { state, dispatch } = useContext(GlobalReducerContext);

  const pegColors: PegColor[] = [PegColor.Red, PegColor.Blue, PegColor.Green];
  const getPegs = (showIcons: boolean) => {
    return pegColors.map((p, index) => (
      <Peg key={index} color={p} ariaLabel={PegColor[p]} showIcon={showIcons} />
    ));
  };

  return (
    <div className={styles.settings}>
      <Form.Group id="showIcons" label="Show unique icons to distinguish colors on pegs:">
        <Switch
          id="showIcons"
          value={state.settings.showIcons}
          options={[
            <div>
              <p>Show icons</p>
              {getPegs(true)}
            </div>,
            <div>
              <p>Do not show icons</p>
              {getPegs(false)}
            </div>,
          ]}
          onChange={(newValue) => dispatch({type: SettingsTypes.SetShowIcons, payload: { showIcons: newValue } })}
        />
      </Form.Group>
      <Form.Group id="colorScheme" label="Preferred Color Scheme">
        <Switch
          id="colorScheme"
          value={state.settings.colorScheme}
          options={['Light', 'Dark', 'System Theme']}
          onChange={(newValue) => dispatch({type: SettingsTypes.SetColorScheme, payload: { colorScheme: newValue } })}
        />
      </Form.Group>
      <p>
        A small game created by <a href="https://eoinobrien.ie">Eoin O'Brien</a>
        .
      </p>
    </div>
  );
};
