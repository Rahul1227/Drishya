import PropTypes from "prop-types";

const VideoTitle = (props) => {
  const { title,overview,rating } = props;
  return (
    <div className="mt-[15%] p-4 text-white absolute z-30 bg-gradient-to-tr from-black w-[38%]"> {/* Add margin-top to ensure it's below the header */}
      <h1 className="text-4xl font-bold m-5">{title}</h1>
      <h2 className="w-[100%] mx-5 text-sm">{overview}</h2>
      <h2 className="mx-5 font-bold mt-3">Rating: {rating} ⭐</h2>
      <div className="mt-4">
        <button className="py-2 px-5 mx-3 shadow-lg bg-white text-black font-bold text-xl
         bg-opacity-80 hover:bg-opacity-100"
         >▶️ Play</button>
        <button className="py-2 px-5 mx-3 shadow-lg bg-gray-600
         font-bold text-xl bg-opacity-80 hover:bg-opacity-100">ℹ️ More info</button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired, // Ensures 'title' is a required string
  overview:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};

export default VideoTitle;
