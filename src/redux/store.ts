import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./friendReducer";
import bankAccountReducer from "./bankAccountReducer";

export default configureStore({
    reducer: {
        friendReducer: friendReducer,
        bankAccountReducer: bankAccountReducer,
    },
});
