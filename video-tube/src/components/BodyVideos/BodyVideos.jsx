import VideoCard from "../VideoCard/VideoCard.jsx";
import styles from "../BodyVideos/BodyVideos.module.css";
import useVideosData from "../../utils/hooks/useVideosData.jsx";

const BodyVideos = () => {
  const data = useVideosData();
  console.log(data);
  return (
    <div className={styles.videosContainer}>
      <VideoCard />
    </div>
  );
};
export default BodyVideos;
