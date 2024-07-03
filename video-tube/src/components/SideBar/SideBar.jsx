import styles from "../SideBar/SideBar.module.css";
import sideBarData from "../../utils/sideBarData.jsx";
import SideBarPart from "../SideBarPart/SideBarPart.jsx";
import React from "react";

const SideBar = () => {
  // console.log(sideBarData);
  return (
    <div className={styles.sideBarContainer}>
      {sideBarData.map((part, index) => {
        return <SideBarPart key={index} data={part} />;
      })}
    </div>
  );
};

export default SideBar;
