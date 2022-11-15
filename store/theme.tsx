import {createSlice} from "@reduxjs/toolkit";

import { AppState } from "./store";


export interface theme{
    themeState: boolean;
}

//intial State
const intialState : theme = {
    themeState: true,
}

//Actual Slice
export const themeSlice = createSlice(
    {
        name: "themeState",
        initialState: intialState,
        reducers: {
            setTheme(state, action){
                state.themeState = action.payload
            }
        },
    }
)

export const { setTheme } = themeSlice.actions;

export const selectThemeState = (state: AppState) => state.themeState.themeState;

export default themeSlice.reducer;