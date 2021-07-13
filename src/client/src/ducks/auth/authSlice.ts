import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from './authTypes';

const initialState: IAuthState = {
    login: '',
    password: '',
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {  
    setAuthData: (state: IAuthState, action: PayloadAction<IAuthState>) => {
      state.login = action.payload.login,
      state.password = action.payload.password
    },
  },
})

export const { setAuthData } = authSlice.actions

export const authReducer = authSlice.reducer