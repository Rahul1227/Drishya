import { useSelector } from "react-redux";
import SuggestionMovieCard from "./SuggestionMovieCard";
import { Link } from "react-router-dom";

const GptMovieSuggestion = () => {
  const tmdbMovies = useSelector((store) => store.gpt.searchedMovieDetails);

  // Check if tmdbMovies is not undefined or null
  const allMovies = tmdbMovies ? tmdbMovies.flatMap((item) => item.results) : [];
  console.log("All movies:", allMovies);

  // Remove movies with a null poster_path
  const moviesWithPoster = allMovies.filter((movie) => movie.poster_path !== null);
  console.log("Movies with valid poster paths:", moviesWithPoster);

  // Filter Hindi movies
  const filteredData = moviesWithPoster.filter((movie) => movie.original_language === "hi");
  console.log("The Hindi movies are:", filteredData);

  // Remove movies with the same title
  const uniqueMovies = [];
  const seenTitles = new Set();

  filteredData.forEach((movie) => {
    if (!seenTitles.has(movie.title)) {
      uniqueMovies.push(movie);
      seenTitles.add(movie.title);
    }
  });

  console.log("Unique Hindi movies are:", uniqueMovies);

 

  return (
    <div>
      {uniqueMovies.map((movie) => (
          <Link to={`/video/${movie?.id}`} key={movie?.id}>
               <SuggestionMovieCard movie={movie} />
          </Link>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
