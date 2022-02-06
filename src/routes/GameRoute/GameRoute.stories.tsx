import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GameRoute } from './GameRoute';

export default {
  title: 'Route/Game',
  component: GameRoute,
} as ComponentMeta<typeof GameRoute>;

const Template: ComponentStory<typeof GameRoute> = () => <GameRoute />;

export const Empty = Template.bind({});
Empty.args = {};
