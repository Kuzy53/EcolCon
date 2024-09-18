import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem('jwt', action.payload);
      } else {
        localStorage.removeItem('jwt');
      }
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem('jwt'); 
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
