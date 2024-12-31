import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      // console.log(data.results);
      dispatch(addUpcomingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    upcomingMovies();
  }, []);
};

export default useUpcomingMovies;
