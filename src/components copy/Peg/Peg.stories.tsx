import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Peg } from './Peg';
import { PegColor } from '../../models';

export default {
  title: 'Peg',
  component: Peg,
} as ComponentMeta<typeof Peg>;

const Template: ComponentStory<typeof Peg> = (args) => <Peg {...args} />;

export const PegRed = Template.bind({});
PegRed.args = {
  color: PegColor.Red
};
