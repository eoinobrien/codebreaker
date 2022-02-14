import { useContext } from 'react';
import Form from 'components/Form';
import { Switch } from 'components/Switch';
import { PegColor } from 'models';
import { Peg } from 'components/Peg';
import styles from './Settings.module.css';
import { SettingsContext } from 'providers/SettingsContextProviders';

export const Settings = () => {
  let { showIcons, setShowIcons, colorScheme, setColorScheme } =
    useContext(SettingsContext);

  const pegColors: PegColor[] = [PegColor.Red, PegColor.Blue, PegColor.Green];
  const getPegs = (showIcons: boolean) => {
    return pegColors.map((p, index) => (
      <Peg key={index} color={p} ariaLabel={PegColor[p]} showIcon={showIcons} />
    ));
  };

  return (
    <div className={styles.settings}>
      <Form.Group label="Show unique icons to distinguish colors on pegs:">
        <Switch
          id="showIcons"
          value={showIcons}
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
          onChange={(newValue) => setShowIcons(newValue)}
        />
      </Form.Group>
      <Form.Group label="Preferred Color Scheme">
        <Switch
          id="colorScheme"
          value={colorScheme}
          options={['Light', 'Dark', 'System Theme']}
          onChange={(newValue) => setColorScheme(newValue)}
        />
      </Form.Group>
      <p>
        A small game created by <a href="https://eoinobrien.ie">Eoin O'Brien</a>
        .
      </p>
    </div>
  );
};
