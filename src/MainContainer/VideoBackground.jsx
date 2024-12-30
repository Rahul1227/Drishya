import PropTypes from "prop-types";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const VideoBackground = ({ movie_id }) => {
  const [key, setKey]=useState(null);
  const fetchTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data);
    const filterData = data.results.filter((res) => res.type === "Trailer");
    console.log(filterData);
    const trailer = filterData ? filterData[0] : data.results[0];
    setKey(trailer.key)
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[90%] overflow-hidden -z-50 ">
    {key && (
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    )}
  </div>
);
};
  

VideoBackground.propTypes = {
  movie_id: PropTypes.number.isRequired,
};

export default VideoBackground;
