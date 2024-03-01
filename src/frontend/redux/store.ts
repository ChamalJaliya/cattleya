import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
// api
import { userApi } from './services/userApi';
import { todosApi } from './services/todosApi';

export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer, 
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware ,todosApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
