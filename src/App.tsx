import { Routes, Route, useLocation } from 'react-router-dom';
import styles from './App.module.css';
import { GameRoute } from 'routes/GameRoute';
import { Home } from 'routes/Home';
import { SettingsContext } from 'context/settingsContext';
import { useState } from 'react';
import { RouterModal } from 'components/RouterModal';
import { Settings } from 'components/Settings';
import { Instructions } from 'components/Instructions';
import { NewGame } from 'components/NewGame';

function App() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  const [showIcons, setShowIcons] = useState<boolean>(true);

  return (
    <SettingsContext.Provider value={{ showIcons, setShowIcons }}>
      <div className={styles.app}>
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
