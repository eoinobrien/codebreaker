import { useContext, useState } from 'react';
import { Button } from 'components/Button';
import { Incrementor } from 'components/Incrementor';
import { Switch } from 'components/Switch';
import Form from 'components/Form';
import { GameSettings, PegColorsArray } from 'models';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { GameTypes } from 'reducers/gamesReducer';
import { createCode, DEFAULT_GAME_SETTINGS } from 'logic';
import styles from './NewGame.module.css';

export const NewGame = () => {
  const { dispatch } = useContext(GlobalReducerContext);

  const [gameSettings, setGameSettings] = useState<GameSettings>(
    DEFAULT_GAME_SETTINGS,
  );

  const createGame = () => {
    dispatch({
      type: GameTypes.NewGame,
      payload: {
        code: createCode(gameSettings),
        settings: gameSettings,
      },
    });
  };

  return (
    <div className={styles.newGame}>
      <Form.Group label="Number of colors to choose from:">
        <Incrementor
          value={gameSettings.numberOfColors}
          min={1}
          max={PegColorsArray.length}
          onChange={(newNumber) =>
            setGameSettings({ ...gameSettings, numberOfColors: newNumber })
          }
        />
      </Form.Group>
      <Form.Group label="Number of pegs in code:">
        <Incrementor
          value={gameSettings.numberOfPegs}
          min={1}
          max={10}
          onChange={(newNumber) =>
            setGameSettings({ ...gameSettings, numberOfPegs: newNumber })
          }
        />
      </Form.Group>
      <Form.Group label="Number of allowed guesses:">
        <Incrementor
          value={gameSettings.totalNumberOfGuesses}
          min={1}
          max={20}
          onChange={(newNumber) =>
            setGameSettings({
              ...gameSettings,
              totalNumberOfGuesses: newNumber,
            })
          }
        />
      </Form.Group>
      <Form.Group label="Allowed duplicates in secret code:">
        <Switch
          id="allowDuplicates"
          value={gameSettings.allowDuplicates ? 1 : 0}
          options={['No', 'Yes']}
          shortLabels={true}
          onChange={(newValue) =>
            setGameSettings({
              ...gameSettings,
              allowDuplicates: newValue === 1,
            })
          }
        />
      </Form.Group>
      <div className={styles.buttonDiv}>
        <Button
          onClick={() => setGameSettings(DEFAULT_GAME_SETTINGS)}
          secondary
          className={styles.button}
        >
          Reset to default settings
        </Button>

        <Button onClick={createGame} className={styles.button}>
          Create Game
        </Button>
      </div>
    </div>
  );
};
