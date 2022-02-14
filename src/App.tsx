import { Routes, Route, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import { GameRoute } from 'routes/GameRoute';
import { Home } from 'routes/Home';
import {
  ColorSchemeState,
  SettingsContext,
  ShowIconsState,
} from 'context/settingsContext';
import { useContext, useState } from 'react';
import { RouterModal } from 'components/RouterModal';
import { Settings } from 'components/Settings';
import { Instructions } from 'components/Instructions';
import { NewGame } from 'components/NewGame';
import classnames from 'classnames';

function App() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  const [showIcons, setShowIcons] = useState<ShowIconsState>(
    ShowIconsState.Hide,
  );
  const [colorScheme, setColorScheme] = useState<ColorSchemeState>(
    ColorSchemeState.SystemDefault,
  );

  var appClasses = classnames(styles.app, {
    ['light']: colorScheme === ColorSchemeState.Light,
    ['dark']: colorScheme === ColorSchemeState.Dark,
  });

  return (
    <SettingsContext.Provider
      value={{ showIcons, setShowIcons, colorScheme, setColorScheme }}
    >
      <div className={appClasses}>
        <Routes location={state?.backgroundLocation || location}>
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
        {state?.backgroundLocation && (
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
    </SettingsContext.Provider>
  );
}

export default App;
