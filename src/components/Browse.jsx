
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import Header from "./Header";


const Browse = () => {
  useNowPlayingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
