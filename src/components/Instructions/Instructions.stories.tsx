import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Instructions } from '.';
import { Key, PegColor } from 'models';

export default {
  title: 'Components/Instructions',
  component: Instructions,
} as ComponentMeta<typeof Instructions>;

const Template: ComponentStory<typeof Instructions> = () => <Instructions />;

export const Instruct = Template.bind({});
Instruct.args = {
};
