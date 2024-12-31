import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movie = useSelector((store) => store?.movie?.nowPlayingMovies);
  // console.log('the movies in the main container are:', movie)

  // Render a loader or fallback while movie data is being fetched
  if (!movie) {
    return <p>Loading movies...</p>;
  }

  // Handle case where the movie array is empty
  if (movie.length === 0) {
    return <p>No movies available. Please check back later.</p>;
  }

  const mainMovieIndex = Math.floor(Math.random() * movie.length);
  const mainMovie = movie[mainMovieIndex];

  const { id, original_title, overview, vote_average } = mainMovie;

  return (
    <div>
      <VideoTitle
        id={id}
        title={original_title}
        rating={vote_average}
        overview={overview}
      />
      <VideoBackground movie_id={id}/>
    </div>
  );
};

export default MainContainer;
