import React, { useEffect, useRef, useState } from "react";
import styles from "../WatchPage/WatchPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { secondPageMenu } from "../../redux/slices/menuSlice.jsx";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat/LiveChat.jsx";
import Send from "../../assets/send.png";
import { addMessage } from "../../redux/slices/chatSlice.jsx";
import { randomName, randomNumber } from "../../utils/constants.jsx";

const WatchPage = () => {
  const isOpen = useSelector((store) => store.menu.isOpen);
  const messages = useSelector((store) => store.chat.messages);

  const [txt, setTxt] = useState("");

  const chatRef = useRef(null);

  console.log(messages);

  const [param] = useSearchParams();
  // console.log(param.get("v"));
  const videoId = param.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(secondPageMenu());
  }, [dispatch]);

  useEffect(() => {
    const scrollToBottom = () => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    };
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: randomName(),
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit lorem${randomNumber()}`,
        })
      );
      scrollToBottom();
    }, 1300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    dispatch(
      addMessage({
        name: "Vasanth",
        message: txt,
      })
    );
    setTxt("");
  };

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
          <div className={styles.chat} ref={chatRef}>
            {messages.map((message, index) => {
              return (
                <LiveChat
                  key={index}
                  name={message.name}
                  message={message.message}
                />
              );
            })}
          </div>
          <div className={styles.chatTxt}>
            <input
              className={styles.inputTxt}
              type="text"
              placeholder="Enter your message..."
              value={txt}
              onChange={(e) => setTxt(e.target.value)}
            />
            <button className={styles.sendBtn} onClick={handleClick}>
              <img src={Send} alt="send button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
