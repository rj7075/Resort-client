import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Authslice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["Auth"],
};

const Reducer = persistReducer(persistConfig, AuthSlice);
export const Store = configureStore({
  reducer: {
    Auth: Reducer,
  },
});

export const persistor = persistStore(Store);
