import { useEffect } from "react";
import { HINDI_MOVIES_2024, HINDI_MOVIES_2023, HINDI_MOVIES_2022 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addHindiMovies2024, addHindiMovies2023, addHindiMovies2022 } from "../store/movieSlice";

const useTopHindiMovies = () => {
  const dispatch = useDispatch();

  const fetchAllHindiMovies = async () => {
    try {
      // Fetch 2024 Movies
      const res2024 = await fetch(HINDI_MOVIES_2024);
      const data2024 = await res2024.json();
      dispatch(addHindiMovies2024(data2024.results));

      // Fetch 2023 Movies
      const res2023 = await fetch(HINDI_MOVIES_2023);
      const data2023 = await res2023.json();
      dispatch(addHindiMovies2023(data2023.results));

      // Fetch 2022 Movies
      const res2022 = await fetch(HINDI_MOVIES_2022);
      const data2022 = await res2022.json();
      dispatch(addHindiMovies2022(data2022.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllHindiMovies();
  }, []);
};

export default useTopHindiMovies;
