import {createSlice} from "@reduxjs/toolkit";

import { AppState } from "./store";


export interface numeroPage{
    numeroPage: number;
}

//intial State
const intialState : numeroPage = {
    numeroPage: 0,
}

//Actual Slice
export const numeroPageSlice = createSlice(
    {
        name: "numeroPage",
        initialState: intialState,
        reducers: {
            setNumeroPage(state, action){
                state.numeroPage = action.payload
            }
        }
    }
)

export const { setNumeroPage } = numeroPageSlice.actions;

export const selectNumeroPageState = (state: AppState) => state.numeroPage.numeroPage;

export default numeroPageSlice.reducer;