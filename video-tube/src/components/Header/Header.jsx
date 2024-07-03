import MenuIcon from "../../assets/menu.svg";
import Logo from "../../assets/youtube-logo.png";
import Search from "../../assets/search.svg";
import Mic from "../../assets/microphone.svg";
import Video from "../../assets/video.svg";
import Notification from "../../assets/bell.svg";
import User from "../../assets/user.svg";
import styles from "../Header/header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menuLogo}>
        <img className={styles.menuIcon} src={MenuIcon} alt="menu-icon" />
        <img className={styles.youtubeLogo} src={Logo} alt="logo" />
      </div>
      <div className={styles.searchMic}>
        <div className={styles.search}>
          <input id={styles.input} type="text" placeholder="Search" />
          <button className={styles.searchBtn}>
            <img src={Search} alt="search-icon" />
          </button>
        </div>
        <div className={styles.mic}>
          <img src={Mic} alt="mic" />
        </div>
      </div>
      <div className={styles.vidNotiUser}>
        <img src={Video} alt="Video" />
        <img src={Notification} alt="Notification" />
        <img src={User} alt="User" />
      </div>
    </div>
  );
};

export default Header;
