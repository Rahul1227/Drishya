import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import useTopHindiMovies from "../customHooks/useTopHindiMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTopRatedSeries from "../customHooks/useTopRatedSeries";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "../GptSearch/GptSearch";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import Header from "./Header";
import { useEffect } from "react";
import { setGptShowFalse } from "../store/gptSlice"; // Create this new action

const Browse = () => {
  const dispatch = useDispatch();
  const gptShow = useSelector((store) => store.gpt.gptShow);

  // Add this useEffect
  useEffect(() => {
    // Reset gptShow to false when component mounts
   
      dispatch(setGptShowFalse());
    
  }, []);

  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopRatedSeries();
  useTopHindiMovies();

  return (
    <div>
      <Header />
      {gptShow ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
