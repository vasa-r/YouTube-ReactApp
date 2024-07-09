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
import { AUTOCOMPLETE_API } from "../../utils/constants.jsx";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // console.log(searchQuery);

  const cache = useRef({});

  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(menuToggle());
  };

  useEffect(() => {
    //debouncing
    const timer = setTimeout(() => {
      fetchSuggestion();
    }, 300);

    //clearing the timeout or sideeffect
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const fetchSuggestion = async () => {
    if (cache.current[searchQuery]) {
      // console.log(cache.current[searchQuery]);
      setSuggestions(cache.current[searchQuery]);
      return;
    }

    const res = await fetch(AUTOCOMPLETE_API + searchQuery);
    const json = await res.json();
    const fetchedSuggestion = json[1];
    cache.current[searchQuery] = fetchedSuggestion;
    setSuggestions(fetchedSuggestion);
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
            <input
              id={styles.input}
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setShowSuggestion(true);
              }}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className={styles.searchBtn}>
              <img src={Search} alt="search-icon" />
            </button>
          </div>
          {suggestions.length >= 1 && showSuggestion && (
            <div className={styles.suggestionTab}>
              {suggestions.map((suggestion, index) => {
                return (
                  <p key={index}>
                    <img src={Search} alt="search icon" />
                    {suggestion}
                  </p>
                );
              })}
            </div>
          )}
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
