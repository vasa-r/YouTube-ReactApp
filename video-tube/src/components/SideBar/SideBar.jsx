import styles from "../SideBar/SideBar.module.css";
import sideBarData from "../../utils/sideBarData.jsx";
import SideBarPart from "../SideBarPart/SideBarPart.jsx";
import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isOpen = useSelector((store) => store.menu.isOpen);
  // console.log(sideBarData);
  if (!isOpen) {
    return;
  }

  return (
    <div className={styles.sideBarContainer}>
      {sideBarData.map((part, index) => {
        return <SideBarPart data={part} key={index} />;
      })}
    </div>
  );
};

export default SideBar;
