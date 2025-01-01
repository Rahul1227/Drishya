import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import useGenAI from "../customHooks/useGenAI";
import { useRef, useState } from "react";

const GptSearchBar = () => {
    const preLang = useSelector(store => store.gpt.preLang);
    const prompt = useRef();
    const [searchQuery, setSearchQuery] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const promptValue = prompt.current.value;
        const query = `List the top 10 ${promptValue} as a plain array in this format: ["Movie 1", "Movie 2", "Movie 3", ...]. Do not include \`\`\`json or any additional text, explanation, or formatting.`;

        setSearchQuery(query);
    };

    useGenAI(searchQuery);

    return (
        <div className="w-full px-4 max-xs:px-2">
            <form className="w-1/2 mx-auto max-xs:w-full flex max-xs:flex-row">
                <input
                    ref={prompt}
                    type='text'
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
