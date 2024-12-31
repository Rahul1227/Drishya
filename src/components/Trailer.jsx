
import { useParams } from "react-router-dom"

import useFetchTrailer from "../customHooks/useFetchTrailer";




const Trailer = () => {
    const  {movie_id}=useParams();
    const key=useFetchTrailer(movie_id)
    
   
    
  return (
    <div  className="bg-black w-full h-screen">
      
      
    {key && (
      <iframe
        className="absolute  w-[100%] h-[95%] aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&controls=0&loop=1&playlist=${key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    )}
  </div>
  )
}

export default Trailer