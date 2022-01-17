import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<h1>h</h1>} />
      </Routes>
    </div>
  );
}

export default App;
