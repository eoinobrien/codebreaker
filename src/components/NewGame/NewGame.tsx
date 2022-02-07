import Form from 'components/Form';
import { Incrementor } from 'components/Incrementor';
import { Switch } from 'components/Switch';
import { PegColorsArray } from 'models';
import { useState } from 'react';
import styles from './NewGame.module.css';

interface NewGameProps {}

export const NewGame = ({}: NewGameProps) => {
  const [numberOfColors, setNumberOfColors] = useState<number>(8);
  const [numberOfPegs, setNumberOfPegs] = useState<number>(4);
  const [totalNumberOfGuesses, setTotalNumberOfGuesses] = useState<number>(10);
  const [allowDuplicates, setAllowDuplicates] = useState<boolean>(false);

  return (
    <div className={styles.newGame}>
      <h1>New Game</h1>

      <Form.Group label="Number of colors to choose from:">
        <Incrementor
          value={numberOfColors}
          min={1}
          max={PegColorsArray.length}
          onChange={(newNumber) => setNumberOfColors(newNumber)}
        />
      </Form.Group>
      <Form.Group label="Number of pegs in code:">
        <Incrementor
          value={numberOfPegs}
          min={1}
          max={10}
          onChange={(newNumber) => setNumberOfPegs(newNumber)}
        />
      </Form.Group>
      <Form.Group label="Number of allowed guesses:">
        <Incrementor
          value={totalNumberOfGuesses}
          min={1}
          max={20}
          onChange={(newNumber) => setTotalNumberOfGuesses(newNumber)}
        />
      </Form.Group>
      <Form.Group label="Allowed duplicates in secret code:">
        <Switch
          id="allowDuplicates"
          value={allowDuplicates ? 1 : 0}
          options={['No', 'Yes']}
          onChange={(newValue) => setAllowDuplicates(newValue === 1)}
        />
      </Form.Group>
    </div>
  );
};
