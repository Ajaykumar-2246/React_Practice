import { createStore } from "redux";

const CounterReducer = (state = { count: 0, hide:true}, action) => {
  if (action.type === "increment") {
    state.count = state.count + 1;
    return {
      ...state,
    };
  }
  if (action.type === "decrement") {
    state.count = state.count - 1;
    return {
      ...state,
    };
  }
  if (action.type === "toggle") {
    state.hide=!state.hide
    return {...state}
  }
  return state;
};

const store = createStore(CounterReducer);

export default store;
