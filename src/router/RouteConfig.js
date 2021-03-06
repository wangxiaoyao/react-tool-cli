const RouteConfig = [
  // 一级路由重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    title: "首页",
    path: "/home",
    component: require("@page/Home").default,
    key: "home",
    defaultRedirect: true,
    children: [
      {
        title: "首页",
        path: "/home/page1",
        component: require("@page/Home/Page1").default,
        key: "page1",
        defaultRedirect: true,
      },
      {
        title: "page2",
        path: "/home/page2",
        component: require("@page/Home/Page2").default,
        key: "page2",
      },
      // 二级路由重定向
      {
        path: "/home",
        redirect: "/home/page1",
      },
    ],
  },
  {
    title: "登录",
    path: "/login",
    component: require("@page/Login").default,
    key: "login",
  },
  // {
  //   title: "暂无页面",
  //   path: "*",
  //   component: require("@page/Whoops404").default,
  //   key: "404",
  // },
];

export default RouteConfig;
