import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuessBoard } from './GuessBoard';
import { Key, PegColor } from '../../models';

export default {
  title: 'GuessBoard',
  component: GuessBoard,
} as ComponentMeta<typeof GuessBoard>;

const Template: ComponentStory<typeof GuessBoard> = (args) => <GuessBoard {...args} />;

export const Board = Template.bind({});
Board.args = {
  guesses: [
    {
      code: [{ color: PegColor.Green }, { color: PegColor.Green }, { color: PegColor.Green }, { color: PegColor.Green }],
      keys: [Key.WrongColor,Key.WrongColor, Key.WrongColor, Key.WrongColor], 
    },
    {
      code: [{ color: PegColor.Green }, { color: PegColor.Green }, { color: PegColor.Red }, { color: PegColor.White }],
      keys: [Key.WrongColor,Key.WrongColor, Key.WrongColor, Key.WrongColor], 
    },
    {
      code: [{ color: PegColor.Green }, { color: PegColor.Blue }, { color: PegColor.Red }, { color: PegColor.White }],
      keys: [Key.RightColorRightSlot,Key.RightColorRightSlot, Key.WrongColor, Key.WrongColor], 
    }
  ],
  totalNumberOfGuesses: 10
};
