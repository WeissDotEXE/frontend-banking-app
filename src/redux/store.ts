import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { tokenSlice } from "./slices/tokenSlice";

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel1,
    whitelist: ["jwt"],
};

const rootReducer: any = combineReducers({
    // Add the generated reducer as a specific top-level slice

    jwt: tokenSlice,
});

const _persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: _persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                /* ignore persistance actions */
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
