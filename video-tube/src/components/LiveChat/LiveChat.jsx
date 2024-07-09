import React from "react";
import styles from "../LiveChat/LiveChat.module.css";
import User from "../../assets/user.svg";

const LiveChat = () => {
  return (
    <div className={styles.chatContainer}>
      <img src={User} alt="user icon" className={styles.chatImg} />
      <div className={styles.chatUser}>
        <span className={styles.name}>Vasanth Raman</span>
        <span className={styles.msg}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
          vel. Tenetur non fugiat molestias mollitia amet vero.
        </span>
      </div>
    </div>
  );
};

export default LiveChat;
