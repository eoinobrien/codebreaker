import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Incrementor } from '.';

export default {
  title: 'Components/Incrementor',
  component: Incrementor,
} as ComponentMeta<typeof Incrementor>;

const Template: ComponentStory<typeof Incrementor> = (args) => (
  <Incrementor {...args} />
);

export const Button = Template.bind({});
Button.args = {
  initialValue: 5
};
