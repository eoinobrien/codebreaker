import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KeyGrid } from '.';
import { Key } from '../../models';

export default {
  title: 'Components/KeyGrid',
  component: KeyGrid,
} as ComponentMeta<typeof KeyGrid>;

const Template: ComponentStory<typeof KeyGrid> = (args) => (
  <KeyGrid {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
  keys: [
    Key.RightColorRightSlot,
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot
  ],
  numberOfPegs: 4
};
