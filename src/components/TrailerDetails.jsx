import { useSelector } from "react-redux";

const TrailerDetails = () => {
  const movieDetails = useSelector((store) => store.movie.movieDetails);
  console.log(movieDetails);
  if(!movieDetails) return;

  const { original_title, overview, tagline, budget,popularity
  } = movieDetails;

  return (
    <div className="text-white mt-[650px] absolute z-50 bg-black w-full h-screen max-xs:mt-[420px]">
      <div className="px-8 py-6 space-y-8">
        {/* Title Section */}
        <div className="border-b border-gray-600 pb-4">
          <h1 className="font-bold text-4xl mb-2">{original_title}</h1>
          {tagline && <h4 className="text-lg italic font-light text-gray-300">“{tagline}”</h4>}
        </div>

        {/* Overview Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Overview</h2>
          <p className="text-lg leading-relaxed text-gray-300">{overview || "No overview available."}</p>
        </div>

        {/* Budget Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Budget</h2>
          <p className="text-lg text-green-400 font-medium">
            {budget ? `$${budget.toLocaleString()}` : "Budget information not available."}
          </p>
        </div>

        {/* Popularity Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Popularity</h2>
          <p className="text-lg text-green-400 font-medium">
            {budget ? popularity : "Not available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrailerDetails;
