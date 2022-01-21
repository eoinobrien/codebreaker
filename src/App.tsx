import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Game } from './routes/Game';
import { Home } from './routes/Home';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
