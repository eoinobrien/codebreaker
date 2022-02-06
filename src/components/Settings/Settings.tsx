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
        color={getPegStyling.get(p)?.color ?? '#000'}
        ariaLabel={PegColor[p]}
      >
        {getIcon(p, showIcons)}
      </Peg>
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
              <p>Show icons on Pegs</p>
              {getPegs(true)}
            </div>
          }
          offLabel={
            <div>
              <p>Do not show icons on Pegs</p>
              {getPegs(false)}
            </div>
          }
          onChange={(newValue) => setShowIcons(newValue)}
        ></Switch>
      </Form.Group>
    </div>
  );
};
