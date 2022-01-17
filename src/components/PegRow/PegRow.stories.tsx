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
};

export const Empty = Template.bind({});
Empty.args = {
  code: [PegColor.Blank, PegColor.Blank, PegColor.Blank, PegColor.Blank],
};

export const ColorsAndEmpty = Template.bind({});
ColorsAndEmpty.args = {
  code: [PegColor.Red, PegColor.Blue, PegColor.Blank, PegColor.Blank],
};

export const Hidden = Template.bind({});
Hidden.args = {
  code: [PegColor.Hidden, PegColor.Hidden, PegColor.Hidden, PegColor.Hidden],
};
