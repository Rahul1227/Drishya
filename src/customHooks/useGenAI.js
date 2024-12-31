import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGptResponse } from "../store/gptSlice";

const useGenAI = (userPrompt) => {
  const dispatch = useDispatch();
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const generateAIResponse = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const data = await model.generateContent(userPrompt);

      // Ensure the response is correctly parsed as an array
      const responseText = data.response.text();
      const parsedResponse = JSON.parse(responseText); // Parse response to get the array

      if (Array.isArray(parsedResponse)) {
        dispatch(setGptResponse(parsedResponse)); // Dispatch the array directly
      } else {
        console.error("Unexpected response format:", responseText);
      }
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  useEffect(() => {
    if (userPrompt) {
      generateAIResponse();
    }
  }, [userPrompt]);
};

export default useGenAI;
