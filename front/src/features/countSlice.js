import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    sub: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

const { actions } = authSlice;
export const { add, sub, reset } = actions;
export default authSlice.reducer;
