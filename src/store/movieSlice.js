import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        topRatedSeries:null,
        movieDetails:null,
        topHindiMovies:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },

        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },

        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },

        addTopRatedSeries:(state,action)=>{
            state.topRatedSeries=action.payload
        },

        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload
        },

        addTopHindiMovies:(state,action)=>{
            state.topHindiMovies=action.payload
        }


       
    }
})

export const {addNowPlayingMovies,
            addTopRatedMovies,
            addUpcomingMovies,
            addTopRatedSeries,
            addMovieDetails,
            addTopHindiMovies

    
    }=movieSlice.actions


export default movieSlice.reducer