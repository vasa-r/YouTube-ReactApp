import SideBar from "../SideBar/SideBar.jsx";
import styles from "../Body/Body.module.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
