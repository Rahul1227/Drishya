import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        topRatedSeries:null,
        
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
        }


       
    }
})

export const {addNowPlayingMovies, addTopRatedMovies, addUpcomingMovies, addTopRatedSeries}=movieSlice.actions


export default movieSlice.reducer