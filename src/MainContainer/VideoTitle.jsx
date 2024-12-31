import PropTypes from "prop-types";

const VideoTitle = (props) => {
  const { title, overview, rating } = props;

  return (
    <div className="mt-[15%] p-4 text-white absolute z-30 bg-gradient-to-tr from-black w-[38%] min-w-[300px]
     top-[2%] left-[5%] max-xs:mt-[180px] max-xs:-ml-[50px]">
      <h1 className="text-4xl font-bold m-5 max-xs:text-lg">{title}</h1>
      <h2 className="w-[100%] mx-5 text-sm max-xs:hidden">{overview}</h2>
      <h2 className="mx-5 font-bold mt-3 max-xs:text-sm">Rating: {rating} ⭐</h2>
      <div className="mt-4 flex flex-wrap">
        <button 
          className="py-2 px-5 m-3 shadow-lg bg-white text-black font-bold text-xl
          bg-opacity-80 hover:bg-opacity-100 max-xs:text-sm max-xs:px-2"
        >
          ▶️ Play
        </button>
        <button 
          className="py-2 px-5 m-3 shadow-lg bg-gray-600
          font-bold text-xl bg-opacity-80 hover:bg-opacity-100 max-xs:text-sm"
        >
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default VideoTitle;
