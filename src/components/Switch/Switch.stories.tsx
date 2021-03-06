import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Peg } from 'components/Peg';
import { PegColor } from 'models';
import { Switch } from '.';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SimpleSwitch = Template.bind({});
SimpleSwitch.args = {
  id: 'switch1',
  value: 0,
  options: ['On', 'Off'],
};

const pegColors: PegColor[] = [PegColor.Red, PegColor.Blue, PegColor.Green];
const getPegs = (showIcons: boolean) => {
  return pegColors.map((p, index) => (
    <Peg key={index} color={p} ariaLabel={PegColor[p]} showIcon={showIcons} />
  ));
};

export const ComplexSwitch = Template.bind({});
ComplexSwitch.args = {
  id: 'switch1',
  value: 1,
  options: [
    <div>
      <p>Show distinct icons on Pegs</p>
      {getPegs(true)}
    </div>,
    <div>
      <p>Do not show icons on Pegs</p>
      {getPegs(false)}
    </div>,
  ],
};

export const ThreeItemsSwitch = Template.bind({});
ThreeItemsSwitch.args = {
  id: 'switch1',
  value: 1,
  options: ['Dark', 'Light', 'System Theme'],
};
