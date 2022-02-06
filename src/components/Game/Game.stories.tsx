import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Key, KeyboardActions, PegColor } from 'models';
import { Game } from './Game';

export default {
  title: 'Components/Game',
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  code: [PegColor.Red, PegColor.Blue, PegColor.Green, PegColor.Yellow],
  gameComplete: false,
  numberOfPegs: 4,
  totalNumberOfGuesses: 10,
  numberOfColors: 8,
  currentGuess: [PegColor.Red, PegColor.Black, PegColor.Purple, PegColor.White],
  guesses: [
    {
      code: [PegColor.Red, PegColor.Black, PegColor.Yellow, PegColor.Purple],
      keys: [Key.RightColorRightSlot, Key.RightColorWrongSlot],
    },
    {
      code: [PegColor.Green, PegColor.Black, PegColor.Blue, PegColor.Orange],
      keys: [Key.RightColorWrongSlot, Key.RightColorWrongSlot],
    },
    {
      code: [PegColor.Red, PegColor.White, PegColor.Blue, PegColor.Orange],
      keys: [Key.RightColorRightSlot, Key.RightColorWrongSlot],
    },
  ],
  newGameCallback: () => {},
  keyboardCallback: (
    action: KeyboardActions,
    color?: PegColor | undefined,
  ) => {},
};
