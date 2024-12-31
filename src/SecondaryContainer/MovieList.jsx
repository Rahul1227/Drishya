import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movie }) => {
  console.log("The movies  in the movie  list  is", movie);
  return (
    <div>
      <h1 className="text-white font-bold text-3xl m-4">{title}</h1>
      <div
        className="flex gap-3 overflow-x-auto overflow-y-hidden mb-5 rounded-lg shadow-lg"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}
      >
        {movie &&
          movie.map((mov) => (
            <Link to={`/video/${mov?.id}`} key={mov?.id}>
            <MovieCard data={mov?.poster_path} />
          </Link>
          ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired, // You can replace `object` with `shape` if you have a specific structure
};

export default MovieList;
