import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => { },
  children: <span>Hello</span>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: () => { },
  children: <span>Hello</span>,
  secondary: true,
};