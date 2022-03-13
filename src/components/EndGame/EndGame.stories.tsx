import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import { DEFAULT_GAME_SETTINGS } from 'logic';
import { GameState, Key, PegColor } from 'models';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';

import { EndGame } from '.';
import { ShowIconsState } from 'reducers/settingsReducer';

export default {
  title: 'Components/EndGame',
  component: EndGame,
  decorators: [
    withReactContext({
      Context: GlobalReducerContext,
      initialState: {
        state: {
          settings: {
            showIcons: ShowIconsState.Hide,
          },
          games: {
            currentGame: {
              code: [
                PegColor.Green,
                PegColor.Red,
                PegColor.Blue,
                PegColor.White,
              ],
              gameState: GameState.Win,
              guesses: [
                { keys: [Key.RightColorRightSlot] },
                { keys: [Key.RightColorWrongSlot] },
                {
                  keys: [
                    Key.RightColorRightSlot,
                    Key.RightColorRightSlot,
                    Key.RightColorRightSlot,
                    Key.RightColorRightSlot,
                  ],
                },
              ],
              settings: DEFAULT_GAME_SETTINGS,
            },
          },
        },
      },
    }),
  ],
} as ComponentMeta<typeof EndGame>;

const Template: ComponentStory<typeof EndGame> = () => <EndGame />;

export const A = Template.bind({});
