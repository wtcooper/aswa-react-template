import { configureStore, combineReducers } from "@reduxjs/toolkit";

// persist tutorial: https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import userReducer from "store/users/userSlice";
import genericDataReducer from "store/genericData/genericDataSlice"

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
    user: userReducer,
    genericData: genericDataReducer
    // notes: NotesReducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)