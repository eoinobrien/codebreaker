import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Game } from "./routes/Game";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
