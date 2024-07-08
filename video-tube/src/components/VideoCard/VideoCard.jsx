import Channel from "../../assets/channel.jpg";
import Menu from "../../assets/threedot.png";
import styles from "../VideoCard/VideoCard.module.css";

const VideoCard = ({ data }) => {
  // console.log(data);

  function formatViews(views) {
    if (views >= 1e6) {
      return (views / 1e6).toFixed(1) + "M views "; // Convert to millions
    } else if (views >= 1e5) {
      return (views / 1e5).toFixed(1) + "L views "; // Convert to lakhs
    } else if (views >= 1e3) {
      return (views / 1e3).toFixed(1) + "k views  "; // Convert to thousands
    } else {
      return views.toString();
    }
  }

  const views = data.statistics.viewCount;

  const view = formatViews(views);

  // Function to format the publication date
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  const dates = data.snippet.publishedAt;

  const date = formatDate(dates);

  //Funtion to trim long title
  const trimTitle = (videoTitle) => {
    if (videoTitle.length >= 67) {
      const trimmed = videoTitle.slice(0, 55) + "...";
      return trimmed;
    }
    return videoTitle;
  };

  const title = data.snippet.localized.title;
  const trimmedTitle = trimTitle(title);
  // console.log(title);

  return (
    <div className={styles.videoCardContainer}>
      <div className={styles.thumbNail}>
        <img src={data.snippet.thumbnails.medium.url} alt="thumb-nail" />
      </div>
      <div className={styles.videoDetails}>
        <div className={styles.channelLogo}>
          <img src={Channel} alt="channel-icon" />
        </div>
        <div className={styles.videoDetail}>
          <p className={styles.title}>{trimmedTitle}</p>
          <p className={styles.chnlTitle}>{data.snippet.channelTitle}</p>
          <div className={styles.viewDate}>
            <p className={styles.viewCount}>{view} &#x2022;</p>
            <p className={styles.date}> {date}</p>
          </div>
        </div>
        <div className={styles.menu}>
          <img src={Menu} alt="three-dot" />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
