import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewGame } from '.';

export default {
  title: 'Components/NewGame',
  component: NewGame,
} as ComponentMeta<typeof NewGame>;

const Template: ComponentStory<typeof NewGame> = (args) => <NewGame />;

export const A = Template.bind({});
