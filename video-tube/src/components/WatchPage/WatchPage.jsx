import React, { useEffect } from "react";
import styles from "../WatchPage/WatchPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { secondPageMenu } from "../../redux/slices/menuSlice.jsx";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const isOpen = useSelector((store) => store.menu.isOpen);

  const [param] = useSearchParams();
  console.log(param.get("v"));
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
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
