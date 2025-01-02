import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import useGenAI from "../customHooks/useGenAI";
import { useRef, useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { setSearchedMovieDetails } from "../store/gptSlice";

const GptSearchBar = () => {
    const preLang = useSelector((store) => store.gpt.preLang);
    const prompt = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const resMovies = useSelector((store) => store.gpt.gptResponse);
    const dispatch = useDispatch();

    // Function to fetch movies by name
    const fetchMovieByName = async (movie_name) => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${movie_name}&include_adult=false&language=en-US&page=1`,
                API_OPTIONS
            );
            const data = await res.json();
            return data;
        } catch (error) {
            console.error(`Error fetching movie "${movie_name}":`, error);
            return null; // Handle errors gracefully
        }
    };

    // Fetch movies by name after resMovies is updated
    useEffect(() => {
        if (resMovies && Array.isArray(resMovies) && resMovies.length > 0) {
            const fetchAllMovies = async () => {
                const promiseArray = resMovies.map((movie) => fetchMovieByName(movie));
                const tmdbResults = await Promise.all(promiseArray);
                const validResults = tmdbResults.filter((result) => result !== null); // Filter null results
                dispatch(setSearchedMovieDetails(validResults));
                console.log("Fetched Movie Details:", validResults);
            };

            fetchAllMovies();
        }
    }, [resMovies, dispatch]);

    // Handle search click
    const handleClick = (e) => {
        e.preventDefault();
        const promptValue = prompt.current.value;
        const query = `List the top 20 ${promptValue} as a plain array in this format: ["Movie 1", "Movie 2", "Movie 3", ...]. Do not include \`\`\`json or any additional text, explanation, or formatting.`;

        setSearchQuery(query);
    };

    // Trigger AI processing
    useGenAI(searchQuery);

    return (
        <div className="w-full px-4 max-xs:px-2">
            <form className="w-1/2 mx-auto max-xs:w-full flex max-xs:flex-row">
                <input
                    ref={prompt}
                    type="text"
                    className="bg-white w-3/4 h-10 p-3 rounded-lg shadow-lg font-extrabold max-xs:w-full"
                    placeholder={lang[preLang]?.searchPlaceholder}
                />
                <button
                    onClick={handleClick}
                    className="ml-4 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-800 font-bold text-white max-xs:ml-2 max-xs:w-auto"
                >
                    {lang[preLang]?.search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
