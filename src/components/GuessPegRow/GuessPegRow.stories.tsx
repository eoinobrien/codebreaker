import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuessPegRow } from '.';
import { PegColor, Key } from '../../models';

export default {
  title: 'Components/GuessPegRow',
  component: GuessPegRow,
} as ComponentMeta<typeof GuessPegRow>;

const Template: ComponentStory<typeof GuessPegRow> = (args) => (
  <GuessPegRow {...args} />
);

export const GuessPegRowCorrect = Template.bind({});
GuessPegRowCorrect.args = {
  code: [PegColor.Red, PegColor.Blue, PegColor.Yellow, PegColor.Green],
  keys: [
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
    Key.RightColorRightSlot,
  ],
};
