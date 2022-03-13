import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KeyRow } from '.';
import { Key } from 'models';

export default {
  title: 'Components/KeyRow',
  component: KeyRow,
} as ComponentMeta<typeof KeyRow>;

const Template: ComponentStory<typeof KeyRow> = (args) => (
  <KeyRow {...args} />
);

export const Row = Template.bind({});
Row.args = {
  keys: [
    Key.RightColorRightSlot,
    Key.RightColorWrongSlot,
    Key.RightColorWrongSlot
  ],
  numberOfPegs: 4
};
