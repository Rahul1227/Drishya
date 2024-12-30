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
    <div>
    {key && (
      <iframe
        className="absolute w-[100%] h-[90%] aspect-video"
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
