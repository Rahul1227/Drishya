
import { useParams } from "react-router-dom"

import useFetchTrailer from "../customHooks/useFetchTrailer";
import useMovieDetails from "../customHooks/useMovieDetails";
import TrailerDetails from "./TrailerDetails";




const Trailer = () => {
    const  {movie_id}=useParams();
    const key=useFetchTrailer(movie_id)
    
    useMovieDetails(movie_id)
    
   
    
    return (
      <div className="bg-black w-full h-screen absolute top-0 left-0">
          {key && (
              <iframe
                  className="absolute w-[100%] h-[95%] aspect-video max-xs:h-[420px]"
                  src={`https://www.youtube.com/embed/${key}?autoplay=1&controls=1&loop=1&playlist=${key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
          )}
          <TrailerDetails/>
      </div>
  )
}

export default Trailer