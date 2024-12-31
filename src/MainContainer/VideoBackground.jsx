import PropTypes from "prop-types";
import useFetchTrailer from "../customHooks/useFetchTrailer";

const VideoBackground = ({ movie_id }) => {
  const key=useFetchTrailer(movie_id)

  return (
    <div>
    {key && (
      <iframe
        className="absolute  w-[100%] h-[90%] aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    )}
  </div>
);
};
  

VideoBackground.propTypes = {
  movie_id: PropTypes.number.isRequired,
};

export default VideoBackground;
