import VideoCard from "../VideoCard/VideoCard.jsx";
import styles from "../BodyVideos/BodyVideos.module.css";
import useVideosData from "../../utils/hooks/useVideosData.jsx";

const BodyVideos = () => {
  const data = useVideosData();
  console.log(data);
  // const dummy = data[0];
  return (
    <div className={styles.videosContainer}>
      {data.map((video) => {
        return <VideoCard key={video.id} data={video} />;
      })}
    </div>
  );
};
export default BodyVideos;
