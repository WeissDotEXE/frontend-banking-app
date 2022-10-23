//@ts-ignore
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const setJwtToken = createAction<string>("setJwtToken");
export const removeJwtToken = createAction<string>("removeToken");

// Initial State
const initialState = {
    token: "",
};

// Reducer
export const tokenSlice = createReducer(initialState, (builder: any) => {
    builder.addCase(setJwtToken, (state: any, action: any) => {
        state.token = action.payload;
    });
    builder.addCase(removeJwtToken, (state: any) => {
        state.token = "";
    });
});
