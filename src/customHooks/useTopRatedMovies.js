import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      // console.log(data.results);
      dispatch(addTopRatedMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
