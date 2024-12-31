import { useEffect } from "react";
import {HINDI_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopHindiMovies} from "../store/movieSlice";

const useTopHindiMovies = () => {
  const dispatch = useDispatch();
  const topHindiMovies = async () => {
    try {
      const res = await fetch(HINDI_MOVIES)
      const data = await res.json();
      // console.log(data.results);
      dispatch(addTopHindiMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    topHindiMovies();
  }, []);
};

export default useTopHindiMovies;
