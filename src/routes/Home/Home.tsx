import { Outlet } from 'react-router-dom';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Outlet />
    </div>
  );
};
