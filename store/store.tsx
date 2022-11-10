import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { languageStateSlice } from "./language";

import { numeroPageSlice } from "./page";


export const makeStore = () => configureStore(
    {
        reducer:{
            [numeroPageSlice.name] : numeroPageSlice.reducer,
            [languageStateSlice.name]: languageStateSlice.reducer,
        }
    }
)

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type AppState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });