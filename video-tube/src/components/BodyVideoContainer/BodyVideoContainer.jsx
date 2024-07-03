import React from "react";
import styles from "../BodyVideoContainer/BodyVideoContainer.module.css";
import BodyTopButtons from "../BodyTopButtons/BodyTopButtons.jsx";
import BodyVideos from "../BodyVideos/BodyVideos.jsx";

const BodyVideoContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <BodyTopButtons />
      <BodyVideos />
    </div>
  );
};

export default BodyVideoContainer;
