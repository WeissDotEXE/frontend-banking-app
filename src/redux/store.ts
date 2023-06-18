import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose the storage type (e.g., local storage)
import friendReducer from "./friendReducer";
import bankAccountReducer from "./bankAccountReducer";

const friendPersistConfig = {
    key: "friendReducer",
    storage,
};

const bankAccountPersistConfig = {
    key: "bankAccountReducer",
    storage,
};

const persistedFriendReducer = persistReducer(
    friendPersistConfig,
    friendReducer
);
const persistedBankAccountReducer = persistReducer(
    bankAccountPersistConfig,
    bankAccountReducer
);

export const store = configureStore({
    reducer: {
        friendReducer: persistedFriendReducer,
        bankAccountReducer: persistedBankAccountReducer,
    },
});

export const persistor = persistStore(store);
