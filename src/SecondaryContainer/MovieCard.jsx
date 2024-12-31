import PropTypes from "prop-types";
import { TMDB_CDN } from "../utils/constants";

const MovieCard = ({ data }) => {
  return (
    <div className="shrink-0 w-48 h-64 bg-gray-300 rounded-lg m-2 ">
      <img
        className="w-72 h-auto rounded-lg shadow-md hover:scale-110 cursor-pointer"
        src={TMDB_CDN + data}
        alt="Movie card"
      />
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.string.isRequired,
};

export default MovieCard;
