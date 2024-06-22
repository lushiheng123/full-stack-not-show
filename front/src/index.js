import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import { configureStoreAsync, saveStateAsync } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
configureStoreAsync().then((store) => {
  store.subscribe(() => {
    saveStateAsync(store.getState());
  });
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
