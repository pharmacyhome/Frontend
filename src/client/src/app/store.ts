import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export default configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
