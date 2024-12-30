import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
const nowPlayingMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  nowPlayingMovies();
}, []);
}

export default useNowPlayingMovies;
