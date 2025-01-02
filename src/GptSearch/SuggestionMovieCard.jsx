import PropTypes from "prop-types";

const SuggestionMovieCard = ({ movie }) => {
  return (
    <div className="flex flex-row bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden w-full mx-auto my-2 max-w-3xl p-2">
      {/* Poster Section */}
      <div className="w-1/3 flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title || "Movie Poster"}
          className="w-full h-44 object-contain"
        />
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          MOVIE
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between p-2 w-2/3">
        {/* Movie Title */}
        <h2 className="text-base font-bold mb-1 line-clamp-2">
          {movie?.title || "Title Unavailable"}
        </h2>

        {/* Overview */}
        <p className="text-gray-300 text-xs leading-snug mb-2 line-clamp-3">
          {movie?.overview || "Overview not available for this movie."}
        </p>

        {/* Ratings and Release Date */}
        <div className="flex justify-between items-center mt-auto">
          {/* Ratings */}
          <div className="flex items-center">
            <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-md font-bold">
              IMDb {movie?.vote_average || "N/A"}
            </span>
          </div>

          {/* Release Date */}
          <div className="text-gray-400 text-xs font-medium">
            Release: {movie?.release_date || "Unknown"}
          </div>
        </div>
      </div>
    </div>
  );
};

SuggestionMovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }),
};

export default SuggestionMovieCard;
