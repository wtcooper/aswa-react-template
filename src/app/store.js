import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "features/users/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
    user: userReducer,
    // notes: NotesReducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
})

export const persistor = persistStore(store)