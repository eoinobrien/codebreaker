import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from '.';

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Button = Template.bind({});
Button.args = {
};
