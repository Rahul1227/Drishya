import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieDetails } from "../store/movieSlice";




const useMovieByName = (movie_name) => {
    const dispatch=useDispatch();

    const fetchMovieByName = async (movie_name)=>{
        const res=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_name}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
        const data=await res.json();
        dispatch(addMovieDetails(data))
    }


    useEffect(()=>{
        fetchMovieByName(movie_name)

    },[movie_name])
  
}

export default useMovieByName