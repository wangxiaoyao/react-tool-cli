import React from "react";
import { Route } from "react-router-dom";

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        );
      }}
    />
  );
}

export const routes = [
  {
    path: "/",
    component: require("@page/Home").default,
    key: "home",
    // redirect: "/home/page1",
    // exact: true,
    routes: [
      {
        path: "/home/page1",
        component: require("@page/Home/Page1").default,
        key: "page1",
      },
      {
        path: "/home/page2",
        component: require("@page/Home/Page2").default,
        key: "page2",
      },
    ],
  },
  {
    path: "/login",
    component: require("@page/Login").default,
    key: "login",
  },
  {
    path: "*",
    component: require("@page/Whoops404").default,
    key: "Whoops404",
  },
];
