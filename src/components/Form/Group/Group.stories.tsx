import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Incrementor } from 'components/Incrementor';
import { Group } from '.';

export default {
  title: 'Components/Form/Group',
  component: Group,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Group>;

const SimpleInput: ComponentStory<typeof Group> = (args) => (
  <Group id="simple" label={args.label}>
    <input type="text" />
  </Group>
);

export const Input = SimpleInput.bind({});
Input.args = {
  label: 'Test',
};

const Increment: ComponentStory<typeof Group> = (args) => (
  <Group id="increment" label={args.label}>
    <Incrementor value={5} onChange={(newValue: number) => alert(newValue)}/>
  </Group>
);

export const Inc = Increment.bind({});
Inc.args = {
  label: 'Incrementor',
};
