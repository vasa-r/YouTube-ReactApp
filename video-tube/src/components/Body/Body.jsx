import BodyVideoContainer from "../BodyVideoContainer/BodyVideoContainer.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import styles from "../Body/Body.module.css";
const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <SideBar />
      <BodyVideoContainer />
    </div>
  );
};

export default Body;
