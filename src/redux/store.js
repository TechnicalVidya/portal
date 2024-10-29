// store.js
import { configureStore } from "@reduxjs/toolkit";
// import * as actionTypes from "_constants__WEBPACK_IMPORTED_MODULE_0__";
import localforage from "localforage";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import userReducer from "./slices/userSlice";

const combinedReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const persistConfig = {
  key: "redux",
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Make sure to configure localforage bxefore the Redux store is created
localforage.config({
  driver: localforage.INDEXEDDB, // or localforage.LOCALSTORAGE
  name: "portal",
  storeName: "portal",
  version: 1.0,
  description: "portal store",
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// store.js
// import { configureStore } from "@reduxjs/toolkit";
// import localforage from "localforage";
// import { combineReducers } from "redux";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from "redux-persist";
// import userReducer from "./slices/userSlice";

// // Make sure to configure localforage before the Redux store is created
// localforage.config({
//   driver: localforage.INDEXEDDB, // Use IndexedDB or LocalStorage as a fallback
//   name: "portal",
//   storeName: "portal",
//   version: 1.0,
//   description: "portal store",
// });

// // Combine reducers
// const combinedReducer = combineReducers({
//   user: userReducer,
// });

// // Create a root reducer
// const rootReducer = (state, action) => {
//   return combinedReducer(state, action);
// };

// // Set up persist configuration
// const persistConfig = {
//   key: "redux",
//   storage: localforage,
// };

// // Create persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure the Redux store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // Create persistor
// export const persistor = persistStore(store);

// // Check if localforage is ready
// localforage
//   .ready()
//   .then(() => {
//     console.log("LocalForage is ready for use");
//   })
//   .catch((err) => {
//     console.error("Error initializing LocalForage:", err);
//   });
