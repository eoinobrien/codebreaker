import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Instructions } from '.';

export default {
  title: 'Components/Instructions',
  component: Instructions,
} as ComponentMeta<typeof Instructions>;

const Template: ComponentStory<typeof Instructions> = () => <Instructions />;

export const Instruct = Template.bind({});
Instruct.args = {
};
