import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface languageState{
    lang: string;
}

//initial state
const languageStateInitial : languageState = {lang:"en"};

//Actual Slice 
export const languageStateSlice = createSlice(
    {
        name:"languageState",
        initialState: languageStateInitial,
        reducers:{
            setLanguageState(state, action){
                state.lang = action.payload
            }
        }
    }
)

export const {setLanguageState} = languageStateSlice.actions;
export const selectLanguageState = (state: AppState) => state.languageState.lang;
export default languageStateSlice.reducer;