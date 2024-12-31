import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieDetails } from "../store/movieSlice";




const useMovieDetails = (movie_id) => {
    const dispatch=useDispatch();

    const fetchMovieDetails = async (movie_id)=>{
        const res=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,API_OPTIONS)
        const data=await res.json();
        dispatch(addMovieDetails(data))
    }


    useEffect(()=>{
        fetchMovieDetails(movie_id)

    },[movie_id])
  
}

export default useMovieDetails