import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuessBoard } from '.';
import { Key, PegColor } from '../../models';

export default {
  title: 'Components/GuessBoard',
  component: GuessBoard,
} as ComponentMeta<typeof GuessBoard>;

const Template: ComponentStory<typeof GuessBoard> = (args) => <GuessBoard {...args} />;

export const GuessTable = Template.bind({});
GuessTable.args = {
  guesses: [
    {
      code: [PegColor.Green, PegColor.Green, PegColor.Green, PegColor.Green],
      keys: [Key.WrongColor,Key.WrongColor, Key.WrongColor, Key.WrongColor], 
    },
    {
      code: [PegColor.Green, PegColor.Green, PegColor.Red, PegColor.White],
      keys: [Key.WrongColor,Key.WrongColor, Key.WrongColor, Key.WrongColor], 
    },
    {
      code: [PegColor.Green, PegColor.Blue, PegColor.Red, PegColor.White],
      keys: [Key.RightColorRightSlot,Key.RightColorRightSlot, Key.WrongColor, Key.WrongColor], 
    }
  ],
  totalNumberOfGuesses: 10
};
