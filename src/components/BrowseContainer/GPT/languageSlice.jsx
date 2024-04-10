import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"config",
    initialState:{
        chooselanguage: "en",
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.chooselanguage = action.payload;
        },
    },
});

export const{changeLanguage} = languageSlice.actions;

export default languageSlice.reducer;