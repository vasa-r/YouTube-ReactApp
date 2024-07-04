import React from "react";
import styles from "../BodyVideoContainer/BodyVideoContainer.module.css";
import BodyTopButtons from "../BodyTopButtons/BodyTopButtons.jsx";
import BodyVideos from "../BodyVideos/BodyVideos.jsx";
import { useSelector } from "react-redux";

const BodyVideoContainer = () => {
  const isOpen = useSelector((store) => store.menu.isOpen);

  return (
    <div
      className={styles.mainContainer}
      style={isOpen ? { marginLeft: "250px" } : { marginLeft: 0 }}
    >
      <BodyTopButtons />
      <BodyVideos />
    </div>
  );
};

export default BodyVideoContainer;
