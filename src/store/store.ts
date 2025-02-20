import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './slices/loginSlice';

// persist 설정 타입 정의
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
});

// Persisted Reducer 적용
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store 타입 정의
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist 사용 시 필요
    }),
});

// Persistor 생성
export const persistor = persistStore(store);

// RootState 및 AppDispatch 타입 추론
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
