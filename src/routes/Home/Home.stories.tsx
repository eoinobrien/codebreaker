import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from '.';

export default {
  title: 'Route/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Empty = Template.bind({});
Empty.args = {};
