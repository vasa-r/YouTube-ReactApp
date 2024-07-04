import { useEffect, useState } from "react";
import { API_URI } from "../constants.jsx";
const useVideosData = () => {
  const [videDatas, setVideoDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchData = await fetch(API_URI);
    const response = await fetchData.json();
    console.log(response);
    setVideoDatas(response);
  };

  return videDatas;
};

export default useVideosData;
