import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedSeries } from "../store/movieSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const topRatedSeries = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      // console.log(data.results);
      dispatch(addTopRatedSeries(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    topRatedSeries();
  }, []);
};

export default useTopRatedSeries;
