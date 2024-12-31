import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className="w-full h-fit bg-gray-700 absolute inet-0 min-h-screen">
      <div className="mt-[110px] text-black">
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </div>
  )
}

export default GptSearch