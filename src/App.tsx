import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { GameRoute } from 'routes/GameRoute';
import { Home } from 'routes/Home';
import { RouterModal } from 'components/RouterModal';
import { Settings } from 'components/Settings';
import { Instructions } from 'components/Instructions';
import { NewGame } from 'components/NewGame';
import { GlobalReducerContext } from 'providers/GlobalReducerContextProvider';
import { ColorSchemeState } from 'reducers/settingsReducer';
import styles from './App.module.css';

function App() {
  let { state } = useContext(GlobalReducerContext);
  let location = useLocation();
  let locationState = location.state as { backgroundLocation?: Location };

  var appClasses = classnames(styles.app, {
    light: state.settings.colorScheme === ColorSchemeState.Light,
    dark: state.settings.colorScheme === ColorSchemeState.Dark,
  });

  return (
    <div className={appClasses}>
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path="/" element={<Home />}>
          <Route index element={<GameRoute />} />
          <Route
            path="settings"
            element={
              <RouterModal header="Settings">
                <Settings />
              </RouterModal>
            }
          />
          <Route
            path="how-to-play"
            element={
              <RouterModal header="Your Instructions">
                <Instructions />
              </RouterModal>
            }
          />
          <Route
            path="new"
            element={
              <RouterModal header="New Game">
                <NewGame />
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
              <RouterModal header="Settings">
                <Settings />
              </RouterModal>
            }
          />
          <Route
            path="how-to-play"
            element={
              <RouterModal header="Your Instructions">
                <Instructions />
              </RouterModal>
            }
          />
          <Route
            path="new"
            element={
              <RouterModal header="New Game">
                <NewGame />
              </RouterModal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
