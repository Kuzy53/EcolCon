import { configureStore } from '@reduxjs/toolkit';
import { ecoApi } from './api/ecoApi';
import { authApi } from './api/apiClient';

const store = configureStore({
  reducer: {
    [ecoApi.reducerPath]: ecoApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
    ecoApi.middleware,
    authApi.middleware,
    ]),
});

export default store;
