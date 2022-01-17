import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlayingBoard } from '.';
import { Key, PegColor } from '../../models';

export default {
  title: 'Components/PlayingBoard',
  component: PlayingBoard,
} as ComponentMeta<typeof PlayingBoard>;

const Template: ComponentStory<typeof PlayingBoard> = (args) => (
  <PlayingBoard {...args} />
);

export const GuessTable = Template.bind({});
GuessTable.args = {
  code: [PegColor.Hidden, PegColor.Hidden, PegColor.Hidden, PegColor.Hidden],
  currentGuess: {
    code: [PegColor.Green, PegColor.Green, PegColor.Green, PegColor.Green],
    keys: [],
    currentGuess: true,
  },
  guesses: [
    {
      code: [PegColor.Green, PegColor.Green, PegColor.Green, PegColor.Green],
      keys: [Key.WrongColor, Key.WrongColor, Key.WrongColor, Key.WrongColor],
    },
    {
      code: [PegColor.Green, PegColor.Green, PegColor.Red, PegColor.White],
      keys: [Key.WrongColor, Key.WrongColor, Key.WrongColor, Key.WrongColor],
    },
    {
      code: [PegColor.Green, PegColor.Blue, PegColor.Red, PegColor.White],
      keys: [
        Key.RightColorRightSlot,
        Key.RightColorRightSlot,
        Key.WrongColor,
        Key.WrongColor,
      ],
    },
  ],
  totalNumberOfGuesses: 10,
};
