import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "@src/router";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => {
            return <RouteWithSubRoutes {...route} />;
          })}
          {/* <Redirect from="/" to="/home/page1"></Redirect> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
