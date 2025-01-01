import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gptSlice',
    initialState:{
        gptShow:'false',
        preLang:'en',
        gptResponse:null,
        searchedMovieDetails:null,

    },
    reducers:{
        toggleGptShow:(state)=>{
            state.gptShow=!state.gptShow
        },
        setPreLang:(state,action)=>{
            state.preLang=action.payload
        },

        setGptResponse:(state,action)=>{
            state.gptResponse=action.payload
        },

        setSearchedMovieDetails:(state,action)=>{
            state.searchedMovieDetails=action.payload
        }
    }

})

export const {toggleGptShow, setPreLang, setGptResponse, setSearchedMovieDetails}=gptSlice.actions;


export default gptSlice.reducer;