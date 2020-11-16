import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RouteView from "@router/RouteView";
import RouteConfig from "@router/RouteConfig";

import store from "./store";
import { Provider } from "react-redux";
// 初始化css
import "./index.css";
// 引入antd的css文件
import "antd/dist/antd.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteView defaultConfig={RouteConfig}></RouteView>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
