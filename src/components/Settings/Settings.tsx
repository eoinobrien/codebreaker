import { useContext, useState } from 'react';
import { SettingsContext } from 'context/settingsContext';
import Form from 'components/Form';
import { Switch } from 'components/Switch';
import { PegColor } from 'models';
import { Peg } from 'components/Peg';
import { getPegStyling } from 'logic';
import { getIcon } from 'components/PegIconChooser';

interface SettingsProps {}

export const Settings = ({}: SettingsProps) => {
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const pegColors: PegColor[] = [PegColor.Red, PegColor.Blue, PegColor.Green];
  const getPegs = (showIcons: boolean) => {
    return pegColors.map((p, index) => (
      <Peg
        key={index}
        color={p}
        ariaLabel={PegColor[p]}
        showIcon={showIcons}
      />
    ));
  };

  return (
    <div>
      <Form.Group>
        <Switch
          id="showIcons"
          value={showIcons}
          onLabel={
            <div>
              <h1>Show icons on Pegs</h1>
              {getPegs(true)}
            </div>
          }
          offLabel={
            <div>
              <h1>Do not show icons on Pegs</h1>
              {getPegs(false)}
            </div>
          }
          onChange={(newValue) => setShowIcons(newValue)}
        ></Switch>
      </Form.Group>
    </div>
  );
};
