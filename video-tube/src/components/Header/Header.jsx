import MenuIcon from "../../assets/menu.svg";
import Logo from "../../assets/youtube-logo.png";
import Search from "../../assets/search.svg";
import Mic from "../../assets/microphone.svg";
import Video from "../../assets/video.svg";
import Notification from "../../assets/bell.svg";
import User from "../../assets/user.svg";
import styles from "../Header/Header.module.css";
import { useDispatch } from "react-redux";
import { menuToggle } from "../../redux/slices/menuSlice.jsx";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(menuToggle());
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.menuLogo}>
        <img
          className={styles.menuIcon}
          src={MenuIcon}
          alt="menu-icon"
          onClick={handleMenuOpen}
        />
        <img className={styles.youtubeLogo} src={Logo} alt="logo" />
      </div>
      <div className={styles.searchMic}>
        <div className="suggestTabInput">
          <div className={styles.search}>
            <input id={styles.input} type="text" placeholder="Search" />
            <button className={styles.searchBtn}>
              <img src={Search} alt="search-icon" />
            </button>
          </div>
          <div className={styles.suggestionTab}>
            <ul>
              <li>vasanth here</li>
              <li>vasanth here</li>
              <li>vasanth here</li>
              <li>vasanth here</li>
              <li>vasanth here</li>
              <li>vasanth here</li>
              <li>vasanth here</li>
              <li>vasanth here</li>
            </ul>
          </div>
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
