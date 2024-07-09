import React from "react";
import styles from "../LiveChat/LiveChat.module.css";
import User from "../../assets/user.svg";

const LiveChat = ({ name, message }) => {
  return (
    <div className={styles.chatContainer}>
      <img src={User} alt="user icon" className={styles.chatImg} />
      <div className={styles.chatUser}>
        <span className={styles.name}>{name}</span>
        <span className={styles.msg}>{message}</span>
      </div>
    </div>
  );
};

export default LiveChat;
