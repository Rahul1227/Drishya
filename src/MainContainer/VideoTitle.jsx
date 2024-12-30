import PropTypes from "prop-types";

const VideoTitle = (props) => {
  const { title,overview,rating } = props;
  return (
    <div className="mt-[15%] p-4 text-white"> {/* Add margin-top to ensure it's below the header */}
      <h1 className="text-4xl font-bold m-5">{title}</h1>
      <h2 className="w-[30%] mx-5">{overview}</h2>
      <h2 className="mx-5 font-bold mt-3">Rating: {rating} ⭐</h2>
      <div>
        <button className="py-2 px-6 mx-3 shadow-lg">▶️Play</button>
        <button className="py-2 px-6 mx-3 shadow-lg">ℹ️More info</button>
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
