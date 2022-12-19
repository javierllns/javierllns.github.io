import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
