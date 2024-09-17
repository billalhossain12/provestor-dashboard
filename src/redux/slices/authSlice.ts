import { createSlice } from '@reduxjs/toolkit';


type TAuthState = {
  token: null | string;
};

const initialState: TAuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // other authentication related reducers can be defined here
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;