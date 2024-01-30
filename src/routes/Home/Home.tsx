import { Outlet } from 'react-router-dom';
import styles from './Home.module.css';
// import createCodes from './test';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Outlet />
      {/* If you need to create new Daily codes */}
      {/* <div>
        {'"' + createCodes().join('","') + '"'}
      </div> */}
    </div>
  );
};
