import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Game } from 'routes/Game';
import { Home } from 'routes/Home';
import { SettingsContext } from 'context/settingsContext';
import { useState } from 'react';

function App() {
  const [showIcons, setShowIcons] = useState<boolean>(true);

  return (
    <SettingsContext.Provider value={{ showIcons, setShowIcons }}>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Game />} />
          </Route>
        </Routes>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
