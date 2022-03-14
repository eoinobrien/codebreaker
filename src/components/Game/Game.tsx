import { useContext } from 'react';
import { Link, Location } from 'react-router-dom';
import {
  BsFillPlusSquareFill,
  BsGear,
  BsPatchPlus,
  BsPatchQuestion,
} from 'react-icons/bs';
import { GuessBoard } from 'components/GuessBoard';
import { IconButton } from 'components/IconButton';
import { Keyboard } from 'components/Keyboard';
import { PegRow } from 'components/PegRow';
import { Menu } from 'components/Menu';
import { GameState, Guess, PegColor, PegColorsArray } from 'models';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { GameTypes } from 'reducers/gamesReducer';
import { createCode, DEFAULT_GAME_SETTINGS } from 'logic';
import styles from './Game.module.css';

interface GameProps {
  code: PegColor[];
  gameState: GameState;
  numberOfPegs: number;
  totalNumberOfGuesses: number;
  numberOfColors: number;
  currentGuess: PegColor[];
  guesses: Guess[];
  showIcons: boolean;
  location: Location;
}

export const Game = ({
  code,
  gameState,
  numberOfPegs,
  totalNumberOfGuesses,
  numberOfColors,
  currentGuess,
  guesses,
  showIcons,
  location,
}: GameProps) => {
  const { dispatch } = useContext(GlobalReducerContext);
  return (
    <div className={styles.game}>
      <div className={styles.codeRow}>
        <PegRow
          code={code}
          hideCode={!gameState}
          numberOfPegs={numberOfPegs}
          showIcons={showIcons}
        />
        <IconButton
          Icon={BsFillPlusSquareFill}
          onClick={() =>
            dispatch({
              type: GameTypes.LoadGame,
              payload: {
                game: {
                  code: createCode(DEFAULT_GAME_SETTINGS),
                  currentGuess: [],
                  gameState: GameState.Ongoing,
                  guesses: [],
                  settings: DEFAULT_GAME_SETTINGS,
                },
              },
            })
          }
        />
        <Menu>
          <Link to={`/new`} state={{ backgroundLocation: location }}>
            <BsPatchPlus className={styles.menuIcon} />
            Advanced New Game
          </Link>
          <Link to={`/how-to-play`} state={{ backgroundLocation: location }}>
            <BsPatchQuestion className={styles.menuIcon} />
            How to Play
          </Link>
          <Link to={`/settings`} state={{ backgroundLocation: location }}>
            <BsGear className={styles.menuIcon} />
            Settings
          </Link>
        </Menu>
      </div>
      <div className={styles.gameAndKeyboard}>
        <div className={styles.guessBoard}>
          <GuessBoard
            currentGuess={currentGuess}
            guesses={guesses}
            numberOfPegs={numberOfPegs}
            totalNumberOfGuesses={totalNumberOfGuesses}
            gameState={gameState}
            showIcons={showIcons}
          />
        </div>
        <div className={styles.keyboard}>
          <Keyboard
            colors={PegColorsArray.slice(0, numberOfColors)}
            showIcons={showIcons}
          />
        </div>
      </div>
    </div>
  );
};
