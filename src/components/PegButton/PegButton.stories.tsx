import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PegButton } from '.';
import { PegColor } from '../../models';

export default {
  title: 'Components/PegButton',
  component: PegButton,
} as ComponentMeta<typeof PegButton>;

const Template: ComponentStory<typeof PegButton> = (args) => (
  <PegButton {...args} />
);

export const PegButtonRed = Template.bind({});
PegButtonRed.args = {
  color: PegColor.Red,
  onClick: () => alert('button clicked'),
};
