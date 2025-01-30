import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage
import taskReducer from "./taskSlice";

// Redux Persist Configuration
const persistConfig = {
  key: "tasks", // Unique key for persisted data
  storage, // Uses local storage
};

// Wrap the reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    tasks: persistedReducer, // Use persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Prevents serialization errors
    }),
});

// Create persistor
export const persistor = persistStore(store);
export default store;
