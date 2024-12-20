import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
  userget: [],
  loggedIn: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count++;
    },

    decrement(state, action) {
      state.count--;
    },

    incrementByN(state, action) {
      state.count += action.payload;
    },

    userData(state, action) {
      state.userget = [...action.payload.data];
    },

    logUser(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
