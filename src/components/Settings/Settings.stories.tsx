import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Settings } from '.';
import { Key, PegColor } from 'models';

export default {
  title: 'Components/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = (args) => <Settings />;

export const A = Template.bind({});
