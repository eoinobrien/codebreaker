import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Keyboard } from '.';
import { PegColor } from '../../models';

export default {
  title: 'Components/Keyboard',
  component: Keyboard,
} as ComponentMeta<typeof Keyboard>;

const Template: ComponentStory<typeof Keyboard> = (args) => <Keyboard {...args} />;

export const KeyboardColors = Template.bind({});
KeyboardColors.args = {
  colors: [PegColor.Red, PegColor.Blue]
};
