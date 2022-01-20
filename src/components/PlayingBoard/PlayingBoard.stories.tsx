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
  code: [PegColor.Green, PegColor.Black, PegColor.Blue, PegColor.White],
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
      keys: [
        Key.RightColorRightSlot,
        Key.RightColorRightSlot,
      ],
    },
  ],
  numberOfPegs: 4,
  totalNumberOfGuesses: 10,
  gameComplete: false
};
