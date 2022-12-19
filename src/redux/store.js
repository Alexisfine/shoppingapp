import {configureStore} from '@reduxjs/toolkit';
//const stripe = require('stripe')('sk_test_51MGYTuLZZfyzAkDDla5rVeNj6ESV9FqmV8WaNRKr5HADEJ37hC8OYZF3Rs3LFGcO6SHfqcwtpO8T0NASqaH0HrFk00VmZO9w91');

import cartReducer from "./cartReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {cart: persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })

})

export let persistor = persistStore(store);