import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RouteView from "@router/RouteView";
import routeConfig from "@router/routeConfig";

import store from "./store";
import { Provider } from "react-redux";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteView defaultConfig={routeConfig}></RouteView>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
