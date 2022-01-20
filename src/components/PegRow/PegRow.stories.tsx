import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PegRow } from '.';
import { PegColor } from '../../models';

export default {
  title: 'Components/PegRow',
  component: PegRow,
} as ComponentMeta<typeof PegRow>;

const Template: ComponentStory<typeof PegRow> = (args) => <PegRow {...args} />;

export const Colours = Template.bind({});
Colours.args = {
  code: [PegColor.Red, PegColor.Red, PegColor.Red, PegColor.Red],
  numberOfPegs: 4,
  showIcons: false,
};

export const Empty = Template.bind({});
Empty.args = {
  code: [],
  numberOfPegs: 4,
  showIcons: false,
};

export const AllColors = Template.bind({});
AllColors.args = {
  code: [
    PegColor.Red,
    PegColor.Green,
    PegColor.Yellow,
    PegColor.Blue,
    PegColor.Black,
    PegColor.White,
    PegColor.Purple,
    PegColor.Pink,
    PegColor.Orange,
    PegColor.Teal,
  ],
  numberOfPegs: 10,
  showIcons: false,
};

export const Hidden = Template.bind({});
Hidden.args = {
  code: [PegColor.Hidden, PegColor.Hidden, PegColor.Hidden, PegColor.Hidden],
  numberOfPegs: 4,
  showIcons: false,
};
