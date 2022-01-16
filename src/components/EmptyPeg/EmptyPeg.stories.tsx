import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyPeg } from './EmptyPeg';

export default {
  title: 'EmptyPeg',
  component: EmptyPeg,
} as ComponentMeta<typeof EmptyPeg>;

const Template: ComponentStory<typeof EmptyPeg> = (args) => <EmptyPeg {...args} />;

export const Empty = Template.bind({});
Empty.args = {};
