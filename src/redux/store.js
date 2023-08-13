import { createStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers( {
    contacts: contactsReducer,
    filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer)
export const persistor = persistStore(store)


// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

