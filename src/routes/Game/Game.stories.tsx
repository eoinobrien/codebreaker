import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Game } from '.';

export default {
  title: 'Route/Game',
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

export const Empty = Template.bind({});
Empty.args = {};
