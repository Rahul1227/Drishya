import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const nowPlayingMovie = useSelector((store) => store?.movie?.nowPlayingMovies);
  const topRatedMovies=useSelector((store)=>store?.movie?.topRatedMovies)
  const upComingMovies=useSelector((store)=>store?.movie?.upcomingMovies)
  const topRatedSeries=useSelector((store)=>store?.movie?.topRatedSeries)
  const movies2024 = useSelector((store) => store.movie?.hindiMovies2024);
  const movies2023 = useSelector((store) => store.movie?.hindiMovies2023);
  const movies2022 = useSelector((store) => store.movie?.hindiMovies2022);

  return (
    <div className="absolute mt-[650px] left-0 z-50 w-full bg-black max-xs:mt-[450px]">
      <MovieList title={"Top Hindi Movies 2024"} movie={movies2024} />
      <MovieList title={"Top Hindi Movies 2023"} movie={movies2023} />
      <MovieList title={"Top Hindi Movies 2022"} movie={movies2022} />
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
