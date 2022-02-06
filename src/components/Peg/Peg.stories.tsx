import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Peg } from '.';
import { PegColor } from 'models';

export default {
  title: 'Components/Peg',
  component: Peg,
} as ComponentMeta<typeof Peg>;

const Template: ComponentStory<typeof Peg> = (args) => <Peg {...args} />;

export const PegRed = Template.bind({});
PegRed.args = {
  color: PegColor.Red
};
