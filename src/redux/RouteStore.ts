import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import  localforage from "localforage"
import  dashboardInfoReducer  from './slices/dashboard/DashboardInfoSlice'
import  accountInfoReducer  from './slices/account/AccountInfoSlice'

import {
  FLUSH, PAUSE,  PERSIST, PURGE, REGISTER, REHYDRATE,
  persistReducer, persistStore
} from "redux-persist"

const dashboardInfoPersistConfig = {
  key: "dashboardInfo",
  storage: localforage
};

const accountInfoPersistConfig = {
  key: "accountInfo",
  storage: localforage
};

export const persistedDashboardInfoReducer = persistReducer (
  dashboardInfoPersistConfig,
  dashboardInfoReducer
);

export const persistedAccountInfoReducer = persistReducer (
  accountInfoPersistConfig,
  accountInfoReducer
);

export const rootStore = configureStore({
  reducer: {
    dashboardInfo: persistedDashboardInfoReducer,
    accountInfo: persistedAccountInfoReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(rootStore);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof rootStore.dispatch;
type useAppDispatchType = () => AppDispatchType;
export const useAppDispatch: useAppDispatchType = useDispatch;