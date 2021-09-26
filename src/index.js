import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./Context/StateProvider";
import reducer, { initialState } from "./Context/reducer";
import TimeAgo from "javascript-time-ago";
import ar from "javascript-time-ago/locale/ar";
import en from "javascript-time-ago/locale/en";
import "./index.css";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ar);

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
