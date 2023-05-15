import { Middleware, configureStore } from '@reduxjs/toolkit';

import { fetchApi } from '@/infrastructure/api';
import {
  translationJobApi,
  translatorManagementApi,
} from '@/infrastructure/api/services';

import translationJob from '../features/translationJob/store';
import translatorManagement from '../features/translatorManagement/store';

const store = configureStore({
  reducer: {
    translationJob,
    translatorManagement,
    [translationJobApi.reducerPath]: translationJobApi.reducer,
    [translatorManagementApi.reducerPath]: translatorManagementApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: true,
    }).concat(fetchApi.middleware as Middleware),
});

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;

// Inferred type: {messages: messageReducer, ...}
export type AppDispatch = typeof store.dispatch;

export default store;
