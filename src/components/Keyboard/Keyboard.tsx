import { PegColor } from 'models';
import { PegButton } from 'components/PegButton';
import styles from './Keyboard.module.css';
import { useCallback, useContext, useEffect } from 'react';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { GameTypes } from 'reducers/gamesReducer';
import { backspace, pushGuess } from 'logic';
import { useTranslation } from 'react-i18next';

interface KeyboardProps {
  colors: PegColor[];
  showIcons: boolean;
}

export const Keyboard = ({ colors, showIcons }: KeyboardProps) => {
  const { state, dispatch } = useContext(GlobalReducerContext);
  const { t } = useTranslation();
  const halfWayIndex = Math.ceil(colors.length / 2);

  const firstHalfOfColors = colors.slice(0, halfWayIndex);
  const secondHalfOfColors = colors.slice(halfWayIndex);

  const keyboardEventFunction = useCallback(
    (event) => {
      if (event.keyCode === 13) {
        dispatch({ type: GameTypes.Enter, payload: {} });
      }
      if (event.keyCode === 8) {
        dispatch({
          type: GameTypes.Backspace,
          payload: { colors: backspace(state.games.currentGame.currentGuess) },
        });
      }
    },
    [dispatch, state.games.currentGame.currentGuess],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyboardEventFunction);

    return () => {
      document.removeEventListener('keydown', keyboardEventFunction);
    };
  }, [keyboardEventFunction]);

  const handleEnter = () => {
    dispatch({ type: GameTypes.Enter, payload: {} });
    dispatch({
      type: GameTypes.SaveGame,
      payload: { game: state.games.currentGame },
    });
  };

  return (
    <div className={styles.keyboard}>
      <h1 className={styles.duplicateString}>
        {state.games.currentGame.settings.allowDuplicates
          ? t('keyboard.duplicatesAllowed')
          : t('keyboard.noDuplicates')}
      </h1>
      <div className={styles.keyboardLine}>
        {firstHalfOfColors.map((color, index) => {
          return (
            <PegButton
              key={index}
              color={color}
              ariaLabel={PegColor[color]}
              onClick={() =>
                dispatch({
                  type: GameTypes.AddGuess,
                  payload: {
                    colors: pushGuess(
                      state.games.currentGame.currentGuess,
                      state.games.currentGame.settings.numberOfPegs,
                      color,
                    ),
                  },
                })
              }
              showIcon={showIcons}
            />
          );
        })}

        <PegButton
          color={PegColor.KeyboardBackspace}
          ariaLabel={t('keyboard.backspace')}
          onClick={() =>
            dispatch({
              type: GameTypes.Backspace,
              payload: {
                colors: backspace(state.games.currentGame.currentGuess),
              },
            })
          }
          showIcon
        />
      </div>
      <div className={styles.keyboardLine}>
        {secondHalfOfColors.map((color, index) => (
          <PegButton
            key={index}
            color={color}
            ariaLabel={PegColor[color]}
            onClick={() =>
              dispatch({
                type: GameTypes.AddGuess,
                payload: {
                  colors: pushGuess(
                    state.games.currentGame.currentGuess,
                    state.games.currentGame.settings.numberOfPegs,
                    color,
                  ),
                },
              })
            }
            showIcon={showIcons}
          />
        ))}

        <PegButton
          color={PegColor.KeyboardEnter}
          ariaLabel={t('keyboard.enter')}
          onClick={handleEnter}
          showIcon
        />
      </div>
    </div>
  );
};
