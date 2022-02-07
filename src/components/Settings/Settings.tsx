import { useState } from 'react';
import Form from 'components/Form';
import { Switch } from 'components/Switch';
import { PegColor } from 'models';
import { Peg } from 'components/Peg';

interface SettingsProps {}

export const Settings = ({}: SettingsProps) => {
  const [showIcons, setShowIcons] = useState<number>(1);
  const [colorScheme, setColorScheme] = useState<number>(2);

  const pegColors: PegColor[] = [PegColor.Red, PegColor.Blue, PegColor.Green];
  const getPegs = (showIcons: boolean) => {
    return pegColors.map((p, index) => (
      <Peg key={index} color={p} ariaLabel={PegColor[p]} showIcon={showIcons} />
    ));
  };

  return (
    <div>
      <Form.Group label="Show Icons">
        <Switch
          id="showIcons"
          value={showIcons}
          options={[
            <div>
              <p>Show icons on Pegs</p>
              {getPegs(true)}
            </div>,
            <div>
              <p>Do not show icons on Pegs</p>
              {getPegs(false)}
            </div>,
          ]}
          onChange={(newValue) => setShowIcons(newValue)}
        />
      </Form.Group>
      <Form.Group label="Color Scheme">
        <Switch
          id="colorScheme"
          value={colorScheme}
          options={[
            <p>Light</p>,
            <p>Dark</p>,
            <p>System Theme</p>,
          ]}
          onChange={(newValue) => setColorScheme(newValue)}
        />
      </Form.Group>
    </div>
  );
};
