import { useEffect, useState } from "react";
import { useClassNames, useDeviceType } from "../../../hooks"; //TO_DO useDeviceType must be called on top of the application tree, preferably inside a context.
import styles from "./Sidebar.module.css";

export const UnfinishedSidebar = () => {
  const classes = useClassNames(styles);
  const { deviceType } = useDeviceType();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    if (deviceType === "desktopL") {
      setShowSidebar(true);
    }
  }, [deviceType]);

  return (
    <div className={classes({ mainContainer: true, collapseMainContainer: !showSidebar })}>
      <div className={styles.toggleShowSidebarWrapper}>
        <div className={styles.toggleShowSidebar} onClick={handleToggleSidebar}>
          X
        </div>
      </div>
      <div className={styles.profilePicture}></div>
      <div className={styles.profileName}>Javier Llanos</div>
      <div className={styles.socialLinks}></div>
      <div className={styles.siteNavigation}></div>
    </div>
  );
};

export default UnfinishedSidebar;
