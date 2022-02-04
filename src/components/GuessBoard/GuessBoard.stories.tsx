import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GuessBoard } from '.';
import { Key, PegColor } from 'models';

export default {
  title: 'Components/GuessBoard',
  component: GuessBoard,
} as ComponentMeta<typeof GuessBoard>;

const Template: ComponentStory<typeof GuessBoard> = (args) => <GuessBoard {...args} />;

export const GuessTable = Template.bind({});
GuessTable.args = {
  currentGuess: [PegColor.Green, PegColor.Green, PegColor.Green, PegColor.Green],
  guesses: [
    {
      code: [PegColor.Green, PegColor.Green, PegColor.Green, PegColor.Green],
      keys: [], 
    },
    {
      code: [PegColor.Green, PegColor.Green, PegColor.Red, PegColor.White],
      keys: [], 
    },
    {
      code: [PegColor.Green, PegColor.Blue, PegColor.Red, PegColor.White],
      keys: [Key.RightColorRightSlot,Key.RightColorRightSlot], 
    }
  ],
  numberOfPegs: 4,
  totalNumberOfGuesses: 10
};
