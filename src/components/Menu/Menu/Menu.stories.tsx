import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '.';

export default {
  title: 'Components/Menu/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: ['Item 1', 'Item 2', 'Item 3'],
};

export const Links = Template.bind({});
Links.args = {
  children: [
    <a href="#settings">Settings</a>,
    <a href="#how-to-play">Help</a>,
    <a href="#new">New</a>,
  ],
};
