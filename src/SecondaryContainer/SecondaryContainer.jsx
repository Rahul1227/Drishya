import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const nowPlayingMovie = useSelector((store) => store?.movie?.nowPlayingMovies);
  const topRatedMovies=useSelector((store)=>store?.movie?.topRatedMovies)
  const upComingMovies=useSelector((store)=>store?.movie?.upcomingMovies)
  const topRatedSeries=useSelector((store)=>store?.movie?.topRatedSeries)

  return (
    <div className="absolute mt-[650px] left-0 z-50 w-full bg-black">
      <MovieList title={"Now Playing"} movie={nowPlayingMovie} />
      <MovieList title={"Top Rated Movies"} movie={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movie={upComingMovies} />
      <MovieList title={"Top Rated Series"} movie={topRatedSeries} />
      <div>
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
