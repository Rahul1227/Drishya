import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchTrailer=(movie_id)=>{
        const [key, setKey]=useState(null);
    
        const fetchTrailer=async (movie_id)=>{
            const res=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
                API_OPTIONS
            )
            const data=await res.json();
            console.log(data);
            const filterData=data.results.filter((mov)=>(
                mov?.type==="Trailer"
            ))
    
            const trailer=filterData?filterData[0]:data.results[0];
            console.log('the trailer details is', trailer)
    
            setKey(trailer.key)
    
    
    
        }
    
        useEffect(()=>{
            fetchTrailer(movie_id)
    
        },[movie_id])
        return  key;



}

export default useFetchTrailer;