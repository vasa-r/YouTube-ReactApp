import React, { useEffect } from "react";
import styles from "../WatchPage/WatchPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { secondPageMenu } from "../../redux/slices/menuSlice.jsx";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat/LiveChat.jsx";
import Send from "../../assets/send.png";

const WatchPage = () => {
  const isOpen = useSelector((store) => store.menu.isOpen);

  const [param] = useSearchParams();
  // console.log(param.get("v"));
  const videoId = param.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(secondPageMenu());
  }, [dispatch]);

  return (
    <div
      className={styles.WatchPageConatainer}
      style={isOpen ? { marginLeft: "250px" } : { marginLeft: 0 }}
    >
      <div className={styles.videoChat}>
        <iframe
          width="950"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className={styles.liveChat}>
          <div className={styles.chat}>
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
            <LiveChat />
          </div>
          <div className={styles.chatTxt}>
            <input
              className={styles.inputTxt}
              type="text"
              placeholder="Enter your message..."
            />
            <button className={styles.sendBtn}>
              <img src={Send} alt="send button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
