import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { GameRoute } from 'routes/GameRoute';
import { Home } from 'routes/Home';
import { RouterModal } from 'components/RouterModal';
import { Settings } from 'components/Settings';
import { Instructions } from 'components/Instructions';
import { NewGame } from 'components/NewGame';
import { EndGame } from 'components/EndGame';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { ColorSchemeState } from 'reducers/settingsReducer';
import { GameState } from 'models';
import styles from './App.module.css';

function App() {
  let { state } = useContext(GlobalReducerContext);
  const { t } = useTranslation();
  let location = useLocation();
  let locationState = location.state as { backgroundLocation?: Location };

  var appClasses = classnames(styles.app, {
    light: state.settings.colorScheme === ColorSchemeState.Light,
    dark: state.settings.colorScheme === ColorSchemeState.Dark,
  });

  const endGameHeader =
    state.games.currentGame.gameState === GameState.Win
      ? 'You Win'
      : state.games.currentGame.gameState === GameState.Loss
      ? 'You Lose'
      : 'Game Ongoing';

  return (
    <div className={appClasses}>
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path="/" element={<Home />}>
          <Route index element={<GameRoute />} />
          <Route
            path="settings"
            element={
              <RouterModal header={t('settings')}>
                <Settings />
              </RouterModal>
            }
          />
          <Route
            path="how-to-play"
            element={
              <RouterModal header={t('instructions')}>
                <Instructions />
              </RouterModal>
            }
          />
          <Route
            path="new"
            element={
              <RouterModal header={t('newGame')}>
                <NewGame />
              </RouterModal>
            }
          />
          <Route
            path="end"
            element={
              <RouterModal header={endGameHeader}>
                <EndGame />
              </RouterModal>
            }
          />
        </Route>
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {locationState?.backgroundLocation && (
        <Routes>
          <Route
            path="settings"
            element={
              <RouterModal header={t('settings')}>
                <Settings />
              </RouterModal>
            }
          />
          <Route
            path="how-to-play"
            element={
              <RouterModal header={t('instructions')}>
                <Instructions />
              </RouterModal>
            }
          />
          <Route
            path="new"
            element={
              <RouterModal header={t('newGame')}>
                <NewGame />
              </RouterModal>
            }
          />
          <Route
            path="end"
            element={
              <RouterModal header={endGameHeader}>
                <EndGame />
              </RouterModal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
