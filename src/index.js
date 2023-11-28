import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";
import Store from "./Redux/CC.Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <HomePage />
    </Provider>
  </React.StrictMode>
);
