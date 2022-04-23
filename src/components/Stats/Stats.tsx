import { useContext, useEffect, useState } from 'react';
import { ShowIconsState } from 'reducers/settingsReducer';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { Button } from 'components/Button';
import { PegRow } from 'components/PegRow';
import {
  createBrokenEncodedGameSettings,
  createCode,
  encodeGameSettings,
} from 'logic';
import { Game, GameSettings, GameState, Key } from 'models';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateTimeLeft, TimeLeft } from 'utils/tomorrowTimer';
import styles from './Stats.module.css';

const KEY_EMOJIS = ['🔴', '⚪', '⚫'];

export const convertKeysToEmojis = (keys: Key[][], numberOfPegs: number) => {
  return keys
    .map((row) => {
      let emojis = row.map((key) => KEY_EMOJIS[key]);

      const blankKeys = numberOfPegs - row.length;
      for (let index = 0; index < blankKeys; index++) {
        emojis.push(KEY_EMOJIS[2]);
      }

      return emojis.join('');
    })
    .join('\n');
};

const getShareableGameUrl = (game: Game) => {
  if (game.settings.isDaily) {
    return 'https://codebreaker.eoin.co/daily';
  }

  return `https://codebreaker.eoin.co/?code=${createBrokenEncodedGameSettings(
    encodeGameSettings(game.code, game.settings),
  )}`;
};

export const Stats = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [clipboardButton, setClipboardButton] = useState<string>(
    t('shareButton.share'),
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  let { state } = useContext(GlobalReducerContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const createNewGame = (gameSettings: GameSettings) => {
    navigate(
      `/?code=${createBrokenEncodedGameSettings(
        encodeGameSettings(createCode(gameSettings), gameSettings),
      )}`,
    );
  };

  const copyToClipboard = (game: Game) => {
    navigator.clipboard.writeText(
      `Codebreaker ${
        game.gameState === GameState.Loss ? 'X' : game.guesses.length
      }/${game.settings.totalNumberOfGuesses}

${convertKeysToEmojis(
  game.guesses.map((g) => g.keys),
  game.settings.numberOfPegs,
)}

${getShareableGameUrl(game)}`,
    );

    setClipboardButton(t('shareButton.copied'));
    setTimeout(() => {
      setClipboardButton(t('shareButton.share'));
    }, 2000);
  };

  return (
    <div className={styles.endGame}>
      {state.games.currentGame.gameState === GameState.Win ? (
        <h1>Great job! You cracked the code!</h1>
      ) : state.games.currentGame.gameState === GameState.Loss ? (
        <h1>You ran out of time.</h1>
      ) : (
        <h1>Quick, go back to crack this code.</h1>
      )}
      {state.games.currentGame.gameState !== GameState.Ongoing && (
        <>
          <div className={styles.codeRow}>
            <PegRow
              code={state.games.currentGame.code}
              numberOfPegs={state.games.currentGame.settings.numberOfPegs}
              showIcons={state.settings.showIcons === ShowIconsState.Show}
            />
          </div>
          <hr className={styles.hr} />
          <div>
            <h2>Next daily: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</h2>
          </div>

          <div className={styles.buttonDiv}>
            <Button
              onClick={() => copyToClipboard(state.games.currentGame)}
              className={styles.button}
            >
              {clipboardButton}
            </Button>
            <Button
              onClick={() => createNewGame(state.games.currentGame.settings)}
              className={styles.button}
              secondary
            >
              {t('newGame')}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
