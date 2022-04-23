import { useContext } from 'react';
import { Link, Location, useNavigate } from 'react-router-dom';
import {
  BsFillPlusSquareFill,
  BsFillShareFill,
  BsGear,
  BsPatchPlus,
  BsPatchQuestion,
} from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
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
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.game}>
      <div className={styles.codeRow}>
        <IconButton
          Icon={BsFillShareFill}
          onClick={() =>
            navigate('/end', { state: { backgroundLocation: location } })
          }
        />
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
            {t('advancedNewGame')}
          </Link>
          <Link to={`/how-to-play`} state={{ backgroundLocation: location }}>
            <BsPatchQuestion className={styles.menuIcon} />
            {t('howToPlay')}
          </Link>
          <Link to={`/settings`} state={{ backgroundLocation: location }}>
            <BsGear className={styles.menuIcon} />
            {t('settings')}
          </Link>
        </Menu>
      </div>
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
  );
};
