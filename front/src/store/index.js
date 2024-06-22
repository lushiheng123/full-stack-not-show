import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/countSlice";
import authReducer from "../features/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  count: countReducer,
});

let store = null;
export const configureStoreAsync = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/state")
      .then((r) => r.json())
      .then((preloadedState) => {
        const options = {
          reducer: rootReducer,
        };
        if (preloadedState) {
          options.preloadedState = preloadedState;
        }
        store = configureStore(options);
        resolve(store);
        // console.log(preloadedState);
      });
  });
};

export const saveStateAsync = (state) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/state", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((r) => r.json())
      .then((res) => {
        resolve(res);
      });
  });
};

export default store;
