import { useSelector } from "react-redux";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import useTopHindiMovies from "../customHooks/useTopHindiMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTopRatedSeries from "../customHooks/useTopRatedSeries";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "../GptSearch/GptSearch";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopRatedSeries();
  useTopHindiMovies();

  const gptShow = useSelector((store) => store.gpt.gptShow);

  return (
    <div className>
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
