import React from "react";
import styles from "../SideBarPart/SideBarPart.module.css";

const SideBarPart = ({ data }) => {
  return (
    <div className={styles.parts}>
      {data.title !== "" ? (
        <h2 className={styles.title}>{data.title}</h2>
      ) : (
        <div></div>
      )}
      {data.items.map((category, index) => {
        return (
          <p key={index} className={styles.content}>
            {category.name}
          </p>
        );
      })}
      <hr />
    </div>
  );
};

export default SideBarPart;
