import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const resMovies = useSelector((store) => store.gpt.gptResponse);

  // Handle cases where resMovies is not an array
  if (!Array.isArray(resMovies)) {
    return <p className="text-center text-xl font-bold py-5">Movie suggestions are not available or invalid format.</p>;
  }
  

  return (
    <div>
      <ul className="w-1/2 mx-auto py-20 text-2xl font-bold h-fit text-white">
        {resMovies.map((movie, index) => (
          <li className='py-5'key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default GptMovieSuggestion;
