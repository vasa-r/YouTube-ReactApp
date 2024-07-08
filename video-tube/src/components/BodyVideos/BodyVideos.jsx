import VideoCard from "../VideoCard/VideoCard.jsx";
import styles from "../BodyVideos/BodyVideos.module.css";
import useVideosData from "../../utils/hooks/useVideosData.jsx";
import { Link } from "react-router-dom";

const BodyVideos = () => {
  const data = useVideosData();
  // console.log(data);
  // const dummy = data[0];
  return (
    <div className={styles.videosContainer}>
      {data.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};
export default BodyVideos;
