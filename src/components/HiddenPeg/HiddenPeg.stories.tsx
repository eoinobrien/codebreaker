import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HiddenPeg } from '.';

export default {
  title: 'Components/HiddenPeg',
  component: HiddenPeg,
} as ComponentMeta<typeof HiddenPeg>;

const Template: ComponentStory<typeof HiddenPeg> = (args) => <HiddenPeg {...args} />;

export const Hidden = Template.bind({});
Hidden.args = {};
