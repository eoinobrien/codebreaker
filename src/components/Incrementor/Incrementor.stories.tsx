import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Incrementor } from '.';

export default {
  title: 'Components/Incrementor',
  component: Incrementor,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Incrementor>;

const Template: ComponentStory<typeof Incrementor> = (args) => (
  <Incrementor {...args} />
);

let value: number = 5;
export const Button = Template.bind({});
Button.args = {
  value: value
};
