import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '.';

export default {
  title: 'Components/Menu/Dropdown',
  component: Dropdown,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Text = Template.bind({});
Text.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const Links = Template.bind({});
Links.args = {
  items: [
    <a href='#settings'>
      Settings
    </a>,
    <a href='#how-to-play'>
      Help
    </a>,
    <a href='#new'>
      New
    </a>,
  ],
};
