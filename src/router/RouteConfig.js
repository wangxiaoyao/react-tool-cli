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
  // 功能性
  {
    title: "表格下载",
    path: "/download",
    component: require("@page/Download_lib").default,
    key: "download",
  },
  {
    title: "树形结构",
    path: "/tree",
    component: require("@page/Tree_lib").default,
    key: "tree",
  },
  {
    title: "下拉刷新",
    path: "/iscroll",
    component: require("@page/Iscroll_lib").default,
    key: "iscroll",
  },
  {
    title: "可视化",
    path: "/g2Plot",
    component: require("@page/G2Plot_lib").default,
    key: "g2Plot",
  },
  {
    title: "规则树：或且等",
    path: "/ruleTree",
    component: require("@page/RuleTree_lib").default,
    key: "ruleTree",
  },
  {
    title: "页面拖拽",
    path: "/gridLayout",
    component: require("@page/GridLayout_lib").default,
    key: "gridLayout",
  },
];

export default RouteConfig;
