import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: "GptSearch",
    initialState:{
        GptSearch: false,
    },
    reducers:{
        showGptSearch:(state)=>{
            state.GptSearch = !state.GptSearch;
        }
    },
});

export const {showGptSearch} = GptSearchSlice.actions;

export default GptSearchSlice.reducer;