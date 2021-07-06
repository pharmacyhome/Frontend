import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from '../ducks/auth/authSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
}) 

export type RootReducer = ReturnType<typeof rootReducer>