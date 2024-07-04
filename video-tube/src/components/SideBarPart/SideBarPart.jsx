import React from "react";
import styles from "../SideBarPart/SideBarPart.module.css";
import { Link } from "react-router-dom";

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
          <Link to={category.link} key={index}>
            <p className={styles.content}>{category.name}</p>
          </Link>
        );
      })}
      <hr />
    </div>
  );
};

export default SideBarPart;
