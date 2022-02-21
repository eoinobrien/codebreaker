import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Settings } from '.';

export default {
  title: 'Components/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = () => <Settings />;

export const A = Template.bind({});
